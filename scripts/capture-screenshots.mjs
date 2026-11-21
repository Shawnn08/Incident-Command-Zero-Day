import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotsDir = path.resolve(__dirname, "../docs/screenshots");

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function clickButtonWithText(page, text) {
  const buttons = await page.$$("button");
  for (const b of buttons) {
    const content = await page.evaluate((el) => el.innerText, b);
    if (content.toLowerCase().includes(text.toLowerCase())) {
      await b.click();
      await new Promise((r) => setTimeout(r, 600));
      return true;
    }
  }
  return false;
}

async function capture() {
  console.log("Launching Puppeteer for Full Uncut Retina Screenshots...");
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: { width: 1440, height: 1000, deviceScaleFactor: 2 },
  });

  const page = await browser.newPage();
  console.log("Navigating to http://localhost:5173...");
  await page.goto("http://localhost:5173", { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1200));

  // =========================================================================
  // SCENARIO 1: P0 ACTIVE OUTAGE (CRISIS TELEMETRY)
  // =========================================================================
  console.log("\n--- CAPTURING SCENARIO 1: P0 ACTIVE OUTAGE ---");
  await clickButtonWithText(page, "P0 Active Outage");
  await new Promise((r) => setTimeout(r, 600));

  // 1. Live Status Portal (<Page>) - Active
  console.log("Capturing 01-live-status-portal-active.png (fullPage)...");
  await clickButtonWithText(page, "1. Live Status Portal");
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(screenshotsDir, "01-live-status-portal-active.png"),
    fullPage: true,
  });

  // 2. Email Dispatch (<Email>) - Active Desktop
  console.log("Capturing 02-email-dispatch-active.png (fullPage)...");
  await clickButtonWithText(page, "2. Email Dispatch");
  await new Promise((r) => setTimeout(r, 600));
  // Ensure Desktop view
  await clickButtonWithText(page, "Desktop");
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(screenshotsDir, "02-email-dispatch-active.png"),
    fullPage: true,
  });

  // 2b. Email Dispatch (<Email>) - Active Mobile
  console.log("Capturing 02b-email-mobile-active.png (fullPage)...");
  await clickButtonWithText(page, "Mobile");
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(screenshotsDir, "02b-email-mobile-active.png"),
    fullPage: true,
  });
  // Switch back to Desktop
  await clickButtonWithText(page, "Desktop");
  await new Promise((r) => setTimeout(r, 600));

  // 3. Formal RCA Report (<Document>) - Active
  console.log("Capturing 03-formal-rca-document-active.png (fullPage)...");
  await clickButtonWithText(page, "3. Formal RCA Report");
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(screenshotsDir, "03-formal-rca-document-active.png"),
    fullPage: true,
  });

  // 4. Resolution Badge (<Canvas>) - Active
  console.log("Capturing 04-resolution-badge-canvas-active.png (fullPage)...");
  await clickButtonWithText(page, "4. Resolution Badge");
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(screenshotsDir, "04-resolution-badge-canvas-active.png"),
    fullPage: true,
  });

  // =========================================================================
  // SCENARIO 2: P0 MITIGATED & RESTORED (CONVERGENCE TELEMETRY)
  // =========================================================================
  console.log("\n--- CAPTURING SCENARIO 2: P0 MITIGATED & RESTORED ---");
  await clickButtonWithText(page, "P0 Mitigated");
  await new Promise((r) => setTimeout(r, 800));

  // 5. Live Status Portal (<Page>) - Mitigated
  console.log("Capturing 05-live-status-portal-mitigated.png (fullPage)...");
  await clickButtonWithText(page, "1. Live Status Portal");
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(screenshotsDir, "05-live-status-portal-mitigated.png"),
    fullPage: true,
  });

  // 6. Email Dispatch (<Email>) - Mitigated Desktop
  console.log("Capturing 06-email-dispatch-mitigated.png (fullPage)...");
  await clickButtonWithText(page, "2. Email Dispatch");
  await new Promise((r) => setTimeout(r, 600));
  await clickButtonWithText(page, "Desktop");
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(screenshotsDir, "06-email-dispatch-mitigated.png"),
    fullPage: true,
  });

  // 7. Formal RCA Report (<Document>) - Mitigated
  console.log("Capturing 07-formal-rca-document-mitigated.png (fullPage)...");
  await clickButtonWithText(page, "3. Formal RCA Report");
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(screenshotsDir, "07-formal-rca-document-mitigated.png"),
    fullPage: true,
  });

  // 8. Resolution Badge (<Canvas>) - Mitigated
  console.log("Capturing 08-resolution-badge-canvas-mitigated.png (fullPage)...");
  await clickButtonWithText(page, "4. Resolution Badge");
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(screenshotsDir, "08-resolution-badge-canvas-mitigated.png"),
    fullPage: true,
  });

  await browser.close();
  console.log("\nAll 8 uncut Retina screenshots successfully captured into docs/screenshots!");
}

capture().catch((err) => {
  console.error("Capture failed:", err);
  process.exit(1);
});
