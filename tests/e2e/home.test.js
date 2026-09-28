const { Builder, By, Until } = require('selenium-webdriver');

describe('E2E Home Page Test', () => {
  let driver;

  beforeAll(async () => {
    // Connects to the standalone Selenium Chrome service on ci-network/localhost
    driver = await new Builder()
      .forBrowser('chrome')
      .usingServer('http://localhost:4444/wd/hub')
      .build();
  });

  afterAll(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  test('should verify the h1 header text', async () => {
    // Make sure your Express app is running locally or accessible on port 3000
    await driver.get('http://host.docker.internal:3000'); 
    
    const header = await driver.findElement(By.tagName('h1'));
    const text = await header.getText();
    
    expect(text).toBe('Welcome to CI/CD');
  });
});