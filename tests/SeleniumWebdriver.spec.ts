import { Builder, By, Key, until } from "selenium-webdriver";
import { Browser } from "selenium-webdriver/lib/capabilities";

const getChromeDriver = () => {
    return new Builder()
        .forBrowser(Browser.CHROME)
        .build();
};

describe("SignUp Page", () => {
    const driver = getChromeDriver()

    beforeAll(async () => {
        await driver.navigate().to("https://venturahr-web.vercel.app/");
    });

    it("should fill input fields and submit a request to create candidate type user", async () => {        
        await driver.findElement(By.id("input-name")).sendKeys("Selenium Teste", Key.RETURN)
        await driver.findElement(By.id("input-email")).sendKeys("selenium.teste@gmail.com", Key.RETURN)
        await driver.findElement(By.id("input-password")).sendKeys("12345678", Key.RETURN)
        await driver.findElement(By.id("input-phone")).sendKeys("12312321321", Key.RETURN)
        await driver.findElement(By.id("input-address")).sendKeys("12312321321", Key.RETURN)
        await driver.findElement(By.id("select-account-type")).sendKeys("Candidato", Key.RETURN)
        await driver.findElement(By.id("input-cpf")).sendKeys("23423423432", Key.RETURN)
        await driver.findElement(By.id("input-cpf")).sendKeys("23423423432", Key.RETURN)
    });
});