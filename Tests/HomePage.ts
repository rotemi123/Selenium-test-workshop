import {Component} from "worthy-selenium-webdriver/dist/lib/Component";

export class HomePage extends Component {
    constructor(driver: any) {
        super(driver);
    }

    getPencil = () => {
        return {
            pencil: this.findElementByDataAutomation("aboveFold-underlineButton-pencil")
        };
    }

    getPopupElements = () => {
        return {
            getStarted: this.findElementByDataAutomation("submissionSelectionPopup-button-getStarted")
        };
    }
}