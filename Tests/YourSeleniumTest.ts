// Create your test here


import {getDrivers} from "worthy-selenium-webdriver/dist/lib/WebDriverFactory";
import {HomePage} from "./HomePage";
import {WaiterUtil} from "worthy-selenium-webdriver/dist/lib/WaiterUtil";
import {Actions} from "worthy-selenium-webdriver/dist/lib/Actions";
import {expect} from "chai";

const webDriver = getDrivers();
const homePage = new HomePage(webDriver);
const wait = new WaiterUtil(webDriver);
const actions  = new Actions(webDriver);

describe("Home page test suite", async () => {
    it("Check ring radio button click get started expect to get to ring submission flow", async () => {

        await homePage.navigate("https://qa.worthy.com/");
        await wait.wait(3000);

        const button = homePage.getPencil();
        await actions.waitAndClick(button.pencil);
        await wait.wait(3000);

        const popup = homePage.getPopupElements();
        await actions.waitAndClick(popup.getStarted);
        await wait.wait(3000);

        expect(await webDriver.getCurrentUrl()).to.include('app');
    })
})