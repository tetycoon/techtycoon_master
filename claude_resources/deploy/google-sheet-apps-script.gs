/**
 * Logs every verified payment as a row in a Google Sheet.
 *
 * Setup (once):
 * 1. Create a Google Sheet. Extensions -> Apps Script. Paste this file. Set TOKEN below
 *    to the same text as 'sheet_token' in razorpay-private/secrets.php.
 * 2. Deploy -> New deployment -> type "Web app" -> Execute as: Me,
 *    Who has access: Anyone -> Deploy. Copy the web-app URL (ends in /exec).
 * 3. Paste that URL as 'sheet_webhook_url' in razorpay-private/secrets.php.
 *
 * The server only sends rows for payments it has verified with Razorpay.
 * Duplicate payment IDs are ignored, so a retried call never adds a second row.
 */
const TOKEN = 'any-long-random-text-also-pasted-into-the-script';
const HEADERS = ['Paid at (UTC)', 'Order ID', 'Payment ID', 'Product', 'Amount', 'Currency',
                 'Email', 'Phone', 'Method', 'Mode', 'Drive link sent?'];

function doPost(e) {
  const out = (obj) => ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
  let d;
  try { d = JSON.parse(e.postData.contents); } catch (err) { return out({ ok: false, error: 'bad json' }); }
  if (d.token !== TOKEN) return out({ ok: false, error: 'bad token' });

  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
    const ids = sheet.getLastRow() > 1
      ? sheet.getRange(2, 3, sheet.getLastRow() - 1, 1).getValues().flat() : [];
    if (ids.indexOf(d.payment_id) === -1) {
      sheet.appendRow([d.paid_at, d.order_id, d.payment_id, d.product, d.amount, d.currency,
                       d.email, d.contact, d.method, d.mode, '']);
    }
    return out({ ok: true });
  } finally {
    lock.releaseLock();
  }
}
