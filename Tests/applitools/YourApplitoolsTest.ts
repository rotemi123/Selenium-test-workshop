// Create your test here
import {getDrivers} from "worthy-selenium-webdriver/dist/lib/WebDriverFactory";
import {conf, eyes} from "./setUpTest.test";
import {BatchInfo, Target} from "@applitools/eyes-selenium";
import {WaiterUtil} from "worthy-selenium-webdriver/dist/lib/WaiterUtil";
import {Helper} from "worthy-applitools/dist/Helper";
import {EyesActions} from "worthy-applitools/dist/EyesActions";

let driver;
describe("Home page applitools test", async () => {
    it("Check Home page on several devices", async () => {
        driver = getDrivers();
        const waiter = new WaiterUtil(driver);
        const helper = new Helper(driver);
        const eyesActions = new EyesActions(eyes, driver);

        conf.setBatch(new BatchInfo("rotem"));

        await driver.navigate().to("https://qa.worthy.com/");

        await eyesActions.eyesOpen("home page");

        await driver.manage().window().maximize();

        await waiter.wait(2000);

        await helper.loadPageScript();

        await eyesActions.eyesCheckFullPage(Target.window().fully(), "home page");

    })
})