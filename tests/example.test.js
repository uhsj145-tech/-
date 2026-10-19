import { describe, expect, it } from "vitest";
import { TestDriver } from "testdriverai/vitest/hooks";
import { login } from "./login.js";

describe("TestDriver Sandbox E2E Flow", () => {
  it("logs in, browses products, and adds an item to the cart", async (context) => {
    const testdriver = TestDriver(context);

    // Launch Chrome and navigate to TestDriver Sandbox
    await testdriver.provision.chrome({
      url: "https://testdriver-sandbox.vercel.app/login",
    });

    // Authenticate using the reusable login helper
    await login(testdriver);

    // Verify products catalog is displayed
    const catalogVisible = await testdriver.assert(
      "The products catalog is visible with TestDriver merchandise"
    );
    expect(catalogVisible).toBeTruthy();

    // Add TestDriver Hat to cart
    await testdriver.find("Add to Cart button under TestDriver Hat").click();

    // Open the cart
    await testdriver.find("Cart button in the top right").click();

    // Verify cart page displays the added item
    const cartAssert = await testdriver.assert(
      "Your Cart page is displayed with TestDriver Hat"
    );
    expect(cartAssert).toBeTruthy();
  });
});
