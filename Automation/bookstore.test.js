const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

// Test Configuration 
const BASE_URL = 'https://bookstore.qacurry.com';
const VALID_EMAIL = 'student@qacurry.com';
const VALID_PASSWORD = 'Q@curry';
const TIMEOUT = 30000;

//  Helper: Build Safari Driver 
async function buildDriver() {
  return await new Builder().forBrowser('safari').build();
}

//  Helper: Login 
async function login(driver) {
  await driver.get(`${BASE_URL}/login.php`);
  await driver.wait(until.elementLocated(By.xpath("//input[@id='email']")), TIMEOUT);
  await driver.findElement(By.xpath("//input[@id='email']")).sendKeys(VALID_EMAIL);
  await driver.findElement(By.xpath("//input[@id='password']")).sendKeys(VALID_PASSWORD);
  await driver.findElement(By.xpath("//input[@value='Login']")).click();
  await driver.wait(until.urlContains('welcome'), TIMEOUT);
  await driver.sleep(3000);
}


// TEST SUITE: QACurry BookStore Automation Tests


describe('QACurry BookStore — Automation Test Suite', function () {
  this.timeout(120000);

  //  MODULE 1: LOGIN 

  describe('Module 1: Login', function () {

    // TC-AUTO-001
    it('TC-AUTO-001: Should display login page with all elements', async function () {
      const driver = await buildDriver();
      try {
        await driver.get(`${BASE_URL}/login.php`);
        await driver.wait(until.elementLocated(By.xpath("//input[@id='email']")), TIMEOUT);

        const emailField = await driver.findElement(By.xpath("//input[@id='email']"));
        const passwordField = await driver.findElement(By.xpath("//input[@id='password']"));
        const loginButton = await driver.findElement(By.xpath("//input[@value='Login']"));

        expect(await emailField.isDisplayed()).to.be.true;
        expect(await passwordField.isDisplayed()).to.be.true;
        expect(await loginButton.isDisplayed()).to.be.true;
      } finally {
        await driver.quit();
      }
    });

    // TC-AUTO-002
    it('TC-AUTO-002: Should login successfully with valid credentials', async function () {
      const driver = await buildDriver();
      try {
        await driver.get(`${BASE_URL}/login.php`);
        await driver.wait(until.elementLocated(By.xpath("//input[@id='email']")), TIMEOUT);

        await driver.findElement(By.xpath("//input[@id='email']")).sendKeys(VALID_EMAIL);
        await driver.findElement(By.xpath("//input[@id='password']")).sendKeys(VALID_PASSWORD);
        await driver.findElement(By.xpath("//input[@value='Login']")).click();

        await driver.wait(until.urlContains('welcome'), TIMEOUT);
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).to.include('welcome');
      } finally {
        await driver.quit();
      }
    });

    // TC-AUTO-003
    it('TC-AUTO-003: Should show error message with invalid credentials', async function () {
      const driver = await buildDriver();
      try {
        await driver.get(`${BASE_URL}/login.php`);
        await driver.wait(until.elementLocated(By.xpath("//input[@id='email']")), TIMEOUT);

        await driver.findElement(By.xpath("//input[@id='email']")).sendKeys('wrong@test.com');
        await driver.findElement(By.xpath("//input[@id='password']")).sendKeys('wrongpassword');
        await driver.findElement(By.xpath("//input[@value='Login']")).click();

        await driver.sleep(3000);
        const pageSource = await driver.getPageSource();
        expect(pageSource).to.include('invalid');
      } finally {
        await driver.quit();
      }
    });

    // TC-AUTO-004
    it('TC-AUTO-004: Should remain on login page when fields are empty', async function () {
      const driver = await buildDriver();
      try {
        await driver.get(`${BASE_URL}/login.php`);
        await driver.wait(until.elementLocated(By.xpath("//input[@value='Login']")), TIMEOUT);

        await driver.findElement(By.xpath("//input[@value='Login']")).click();

        await driver.sleep(3000);
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).to.include('login');
      } finally {
        await driver.quit();
      }
    });

  });


// MODULE 2: DASHBOARD & BOOK CATALOGUE 
 
  describe('Module 2: Dashboard & Book Catalogue', function () {
 
    // TC-AUTO-005
    it('TC-AUTO-005: Should display books on dashboard after login', async function () {
      const driver = await buildDriver();
      try {
        await login(driver);
        await driver.wait(until.elementLocated(By.xpath("//div[contains(@class,'well well-sm')]//div[1]//div[1]//div[2]//div[1]//div[1]//a[1]")), TIMEOUT);
 
        const detailsLinks = await driver.findElements(By.xpath("//div[contains(@class,'well well-sm')]//div[1]//div[1]//div[2]//div[1]//div[1]//a[1]"));
        expect(detailsLinks.length).to.be.greaterThan(0);
      } finally {
        await driver.quit();
      }
    });
 
    // TC-AUTO-006
    it('TC-AUTO-006: Should navigate to book details page when Details button is clicked', async function () {
      const driver = await buildDriver();
      try {
        await login(driver);
        await driver.wait(until.elementLocated(By.xpath("//div[contains(@class,'well well-sm')]//div[1]//div[1]//div[2]//div[1]//div[1]//a[1]")), TIMEOUT);
 
        const detailsButton = await driver.findElement(By.xpath("//div[contains(@class,'well well-sm')]//div[1]//div[1]//div[2]//div[1]//div[1]//a[1]"));
        await detailsButton.click();
 
        await driver.wait(until.urlContains('moreInfo'), TIMEOUT);
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).to.include('moreInfo');
      } finally {
        await driver.quit();
      }
    });
 
  });
 
//  MODULE 3: LOGOUT 
 
  describe('Module 3: Logout', function () {
 
    // TC-AUTO-007
    it('TC-AUTO-007: Should logout successfully and redirect to login page', async function () {
      const driver = await buildDriver();
      try {
        await login(driver);
        await driver.wait(until.elementLocated(By.xpath("//a[contains(@href,'logout.php')]")), TIMEOUT);
 
        const logoutLink = await driver.findElement(By.xpath("//a[contains(@href,'logout.php')]"));
        await logoutLink.click();
 
        await driver.wait(until.urlContains('login'), TIMEOUT);
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).to.include('login');
      } finally {
        await driver.quit();
      }
    });
 
  });
 
});