import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotsDir = path.resolve(__dirname, "../docs/screenshots");

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function capture() {
  console.log("Launching Puppeteer...");
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: { width: 1440, height: 1100, deviceScaleFactor: 2 },
  });

  const page = await browser.newPage();
  console.log("Navigating to http://localhost:5173...");
  await page.goto("http://localhost:5173", { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1500));

  // 1. Live Status Portal (<Page>)
  console.log("Capturing 01-live-status-portal.png...");
  await page.screenshot({
    path: path.join(screenshotsDir, "01-live-status-portal.png"),
    fullPage: false,
  });

  // 2. Email Dispatch (<Email>)
  console.log("Switching to Email Dispatch tab...");
  const buttons = await page.$$("button");
  for (const b of buttons) {
    const text = await page.evaluate((el) => el.innerText, b);
    if (text.includes("Email Dispatch")) {
      await b.click();
      break;
    }
  }
  await new Promise((r) => setTimeout(r, 1000));
  console.log("Capturing 02-email-dispatch.png...");
  await page.screenshot({
    path: path.join(screenshotsDir, "02-email-dispatch.png"),
    fullPage: false,
  });

  // 2b. Mobile view for Email
  for (const b of await page.$$("button")) {
    const text = await page.evaluate((el) => el.innerText, b);
    if (text.includes("Mobile")) {
      await b.click();
      break;
    }
  }
  await new Promise((r) => setTimeout(r, 1000));
  console.log("Capturing 02b-email-mobile.png...");
  await page.screenshot({
    path: path.join(screenshotsDir, "02b-email-mobile.png"),
    fullPage: false,
  });

  // Switch back to desktop
  for (const b of await page.$$("button")) {
    const text = await page.evaluate((el) => el.innerText, b);
    if (text.includes("Desktop")) {
      await b.click();
      break;
    }
  }
  await new Promise((r) => setTimeout(r, 800));

  // 3. Formal RCA Report (<Document>)
  console.log("Switching to Formal RCA Report tab...");
  for (const b of await page.$$("button")) {
    const text = await page.evaluate((el) => el.innerText, b);
    if (text.includes("Formal RCA Report")) {
      await b.click();
      break;
    }
  }
  await new Promise((r) => setTimeout(r, 1000));
  console.log("Capturing 03-formal-rca-document.png...");
  await page.screenshot({
    path: path.join(screenshotsDir, "03-formal-rca-document.png"),
    fullPage: false,
  });

  // 4. Resolution Badge (<Canvas>)
  console.log("Switching to Resolution Badge tab...");
  for (const b of await page.$$("button")) {
    const text = await page.evaluate((el) => el.innerText, b);
    if (text.includes("Resolution Badge")) {
      await b.click();
      break;
    }
  }
  await new Promise((r) => setTimeout(r, 1000));
  console.log("Capturing 04-resolution-badge-canvas.png...");
  await page.screenshot({
    path: path.join(screenshotsDir, "04-resolution-badge-canvas.png"),
    fullPage: false,
  });

  // 5. P0 Mitigated State Scenario
  console.log("Switching to P0 Mitigated Scenario...");
  for (const b of await page.$$("button")) {
    const text = await page.evaluate((el) => el.innerText, b);
    if (text.includes("P0 Mitigated")) {
      await b.click();
      break;
    }
  }
  await new Promise((r) => setTimeout(r, 1000));
  console.log("Capturing 05-mitigated-resolution.png...");
  await page.screenshot({
    path: path.join(screenshotsDir, "05-mitigated-resolution.png"),
    fullPage: false,
  });

  await browser.close();
  console.log("All screenshots successfully captured into docs/screenshots!");
}

capture().catch((err) => {
  console.error("Capture failed:", err);
  process.exit(1);
});
