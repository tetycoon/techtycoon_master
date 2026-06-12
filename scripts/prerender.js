const puppeteer = require('puppeteer');
const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = 3456;
const BUILD_DIR = path.join(__dirname, '..', 'build');

const app = express();
// Serve static files but map all routes to index.html to allow client side routing
app.use(express.static(BUILD_DIR));
app.use((req, res) => {
  res.sendFile(path.join(BUILD_DIR, 'index.html'));
});

const server = app.listen(PORT, async () => {
  console.log(`Prerender server running on port ${PORT}`);
  
  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // We only need to prerender the home page for the main SEO issues, but we can add more later
    const routes = ['/'];
    
    for (const route of routes) {
      console.log(`Prerendering route: ${route}`);
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0' });
      
      // Wait an extra 2 seconds for any animations/React renders
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      let html = await page.content();
      
      // Replace the noscript tag or generic content if we want, but hydration will work regardless
      const outPath = route === '/' 
        ? path.join(BUILD_DIR, 'index.html')
        : path.join(BUILD_DIR, route, 'index.html');
        
      if (route !== '/') {
        fs.mkdirSync(path.join(BUILD_DIR, route), { recursive: true });
      }
      
      fs.writeFileSync(outPath, html);
      console.log(`Successfully prerendered ${route}`);
    }
    
    await browser.close();
    console.log("Prerendering complete!");
  } catch (err) {
    console.error('Error during prerendering:', err);
    process.exit(1);
  } finally {
    server.close();
  }
});
