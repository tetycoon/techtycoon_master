<?php
/*
 * TEMPLATE ONLY. Do NOT put real keys in this file and do NOT upload a filled-in
 * copy inside public_html.
 *
 * On Hostinger: File Manager -> go to your home folder (the one that CONTAINS
 * public_html) -> create folder "razorpay-private" -> create "secrets.php" in it
 * with the content below and your real values:
 *
 *   /home/<user>/razorpay-private/secrets.php     <- secrets (private)
 *   /home/<user>/razorpay-private/data/            <- order records (created automatically)
 *   /home/<user>/public_html/                      <- the website
 *
 * Use rzp_test_ keys first. Switch to rzp_live_ keys only after test payments pass.
 */
return [
    'key_id'         => 'rzp_test_XXXXXXXXXXXXXX',
    'key_secret'     => 'PASTE_KEY_SECRET_HERE',
    // Dashboard -> Settings -> Webhooks -> the secret you type when creating the webhook
    'webhook_secret' => 'PASTE_WEBHOOK_SECRET_HERE',

    // Optional: Google Apps Script web-app URL that appends each paid order to a sheet
    // (see deploy/google-sheet-apps-script.gs). Leave '' to turn off.
    'sheet_webhook_url' => '',
    'sheet_token'       => 'any-long-random-text-also-pasted-into-the-script',
];
