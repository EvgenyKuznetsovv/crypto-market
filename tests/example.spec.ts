import { expect, test } from "@playwright/test";

function convertToNumber(value: string): number {
  value = value.trim().toLowerCase();

  if (value.endsWith("k")) {
    return parseFloat(value.replace("k", "")) * 1_000;
  }
  if (value.endsWith("m")) {
    return parseFloat(value.replace("m", "")) * 1_000_000;
  }
  if (value.endsWith("b")) {
    return parseFloat(value.replace("b", "")) * 1_000_000_000;
  }

  return parseFloat(value);
}

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".loaderWpap", { state: "hidden" });
  });

  test("should have correct metadta and element", async ({ page }) => {
    const searchInput = await page.locator('input[type="search"]');

    await expect(searchInput).toBeVisible();

    const table = await page.locator("table");

    await expect(table).toBeVisible();

    const pagination = page.locator("#pagination");

    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    await expect(pagination).toBeVisible();
  });

  test("should search PSG coin", async ({ page }) => {
    await page.fill('input[type="search"]', "psg");

    const isPsgPresent = await page.waitForFunction(() => {
      const table = document.querySelector("table");
      const firstCell = table?.querySelector("tr:first-child td:first-child");

      return firstCell && firstCell.textContent?.toLowerCase() === "psg";
    });

    if (!isPsgPresent) {
      throw new Error("PSG coin was not found in the first cell.");
    }
  });

  test("should check Price column sorting", async ({ page }) => {
    const priceHeader = await page.waitForSelector('th:has-text("Price")');

    const buttonInPriceHeader = await priceHeader.$("button");

    await expect(buttonInPriceHeader).not.toBeNull();

    await buttonInPriceHeader?.click();

    const firstRowSecondCellText = await page.$eval(
      "tr:nth-child(1) td:nth-child(2)",
      (el) => el.textContent || ""
    );
    const firstRowSecondCell = convertToNumber(firstRowSecondCellText);

    const secondRowSecondCellText = await page.$eval(
      "tr:nth-child(2) td:nth-child(2)",
      (el) => el.textContent || ""
    );
    const secondRowSecondCell = convertToNumber(secondRowSecondCellText);

    expect(firstRowSecondCell).toBeGreaterThan(secondRowSecondCell);
  });

  test("should check Price change column sorting", async ({ page }) => {
    const priceHeader = await page.waitForSelector('th:has-text("Price change (24h)")');

    const buttonInPriceHeader = await priceHeader.$("button");

    await expect(buttonInPriceHeader).not.toBeNull();

    await buttonInPriceHeader?.click();

    const firstRowSecondCellText = await page.$eval(
      "tr:nth-child(1) td:nth-child(3)",
      (el) => el.textContent || ""
    );
    const firstRowSecondCell = convertToNumber(firstRowSecondCellText);

    const secondRowSecondCellText = await page.$eval(
      "tr:nth-child(2) td:nth-child(3)",
      (el) => el.textContent || ""
    );
    const secondRowSecondCell = convertToNumber(secondRowSecondCellText);

    expect(firstRowSecondCell).toBeGreaterThan(secondRowSecondCell);
  });

  test("should check Market cap column sorting", async ({ page }) => {
    const priceHeader = await page.waitForSelector('th:has-text("Market cap")');

    const buttonInPriceHeader = await priceHeader.$("button");

    await expect(buttonInPriceHeader).not.toBeNull();

    await buttonInPriceHeader?.click();

    const firstRowSecondCellText = await page.$eval(
      "tr:nth-child(1) td:nth-child(4)",
      (el) => el.textContent || ""
    );
    const firstRowSecondCell = convertToNumber(firstRowSecondCellText);

    const secondRowSecondCellText = await page.$eval(
      "tr:nth-child(2) td:nth-child(4)",
      (el) => el.textContent || ""
    );
    const secondRowSecondCell = convertToNumber(secondRowSecondCellText);

    expect(firstRowSecondCell).toBeGreaterThan(secondRowSecondCell);
  });

  test("should redirect to coin details page after clicking on image", async ({
    page,
  }) => {
    const row = await page.waitForSelector("table tr:nth-child(2)");
    const coinId = await row.getAttribute("id");
    const firstCellImage = await row.$("td:first-child img");

    await expect(firstCellImage).not.toBeNull();

    await firstCellImage?.click();
    const expectedUrl = `http://localhost:3000/coin-details/${coinId}`;

    await expect(page).toHaveURL(expectedUrl);
  });

  test("should display coinShopForm after clicking the 'add' button", async ({
    page,
  }) => {
    const row = await page.waitForSelector("table tr:nth-child(2)");
    const addButton = await row.waitForSelector('button:has-text("Add")');

    await addButton.click();

    const form = await page.waitForSelector("#coinShopForm");

    expect(form).not.toBeNull();
    await expect(form?.isVisible()).toBeTruthy();
  });

  test("should add binance-coin to portfolio and and delete after it", async ({
    page,
  }) => {
    await page.evaluate(() => {
      localStorage.setItem("portfolio", JSON.stringify({}));
    });
    const row = await page.waitForSelector('table tr[id="binance-coin"]');

    expect(row).not.toBeNull();
    const addButton = await row?.waitForSelector('button:has-text("Add")');

    expect(addButton).not.toBeNull();
    await addButton?.click();
    const form = await page.$("#coinShopForm");

    expect(form).not.toBeNull();
    const input = await form?.$("input");

    expect(input).not.toBeNull();
    await input?.fill("2");

    const buyButton = await form?.waitForSelector('button:has-text("Buy")');

    await buyButton?.click();

    await page.mouse.click(0, 0);

    const portfolio = await page.evaluate(() => {
      return localStorage.getItem("portfolio");
    });

    expect(portfolio).not.toBeNull();
    const portfolioObject = JSON.parse(portfolio || "{}");

    expect(portfolioObject).toHaveProperty("binance-coin");
    const stockPortfolio = await page.waitForSelector("#stockPortfolio");

    await stockPortfolio.click();

    const userPortfolioModal = await page.waitForSelector("#userPorfolioModal", {
      state: "visible",
    });

    const deleteIconButton = await userPortfolioModal.waitForSelector(
      'button[name="deleteIcon"]',
      { state: "visible" }
    );

    await deleteIconButton.click();

    const portfolioAfter = await page.evaluate(() => {
      return localStorage.getItem("portfolio");
    });

    const portfolioAfterObject = JSON.parse(portfolioAfter || "{}");

    expect(portfolioAfterObject).not.toHaveProperty("binance-coin");
  });

  test("should display error message for non-numeric input", async ({ page }) => {
    const row = await page.waitForSelector("table tr:nth-child(2)");
    const addButton = await row.waitForSelector('button:has-text("Add")');

    await addButton.click();

    const form = await page.waitForSelector("#coinShopForm");

    const buyButton = await form?.waitForSelector('button:has-text("Buy")');

    await buyButton.click();

    const errorMessage = await form.waitForSelector("#coinShopFormError");
    const errorText = await errorMessage.innerText();

    expect(errorText).toBe("The value must be a number");
  });
});

test.describe("Header", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".loaderWpap", { state: "hidden" });
  });

  test("should display userPortfolioModal after clicking on stockPortfolio", async ({
    page,
  }) => {
    const stockPortfolio = await page.waitForSelector("#stockPortfolio");

    await stockPortfolio.click();

    const userPortfolioModal = await page.waitForSelector("#userPorfolioModal", {
      state: "visible",
    });

    expect(userPortfolioModal).not.toBeNull();
    await expect(userPortfolioModal?.isVisible()).toBeTruthy();
  });
});

test.describe("invalid URLs", () => {
  test("should display 'Are you lost?'", async ({ page }) => {
    await page.goto("http://localhost:3000/dssd");
    const heading = await page.waitForSelector("h1");
    const headingText = await heading.innerText();

    expect(headingText).toBe("Are you lost?");
  });

  test("should display 'Invalid ID'", async ({ page }) => {
    await page.goto("http://localhost:3000/coin-details/bitcoin4");
    const heading = await page.waitForSelector("h1");
    const headingText = await heading.innerText();

    expect(headingText).toBe("Invalid ID");
  });
});
