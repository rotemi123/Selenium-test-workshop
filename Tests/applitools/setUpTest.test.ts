import { afterEach, before, beforeEach} from 'mocha';
import {
    Configuration,
    Eyes,
    VisualGridRunner
} from "@applitools/eyes-selenium"
import {
    getAndSetEyes,
    getConfiguration,
    getRunner
} from "worthy-applitools/dist/ApplitoolsBase"
import { printUrlOfTestResult } from "../applitools/reselts"
import { EyesActions } from "worthy-applitools/dist/EyesActions"

if (process.env.CI !== "true") {
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('dotenv').config({
        path: `.env.development`
    })
}

export let runner: VisualGridRunner, eyes: Eyes, conf: Configuration, eyesActions: EyesActions;

before(async () => {
    require('dotenv').config({
        path: `.env.development`
    })

    // Get Runner
    runner = getRunner();

    // Get configuration
    conf = getConfiguration(`Content site - env ----`);
    conf.setApiKey("lJ4afhvjz4111093Q5fKN7E0eb7UEoO8W98jG6QtMaFPkE110");
    conf.setLayoutBreakpoints(true);

});

beforeEach(async () => {
    eyes = getAndSetEyes(runner, conf);
    eyesActions = new EyesActions(eyes);
})

afterEach(async () => {
    console.log("rotem")
    await eyesActions.closeEyes();
    await printUrlOfTestResult(runner, eyes.getBatch().getName());
    await eyesActions.abortEyes();
});