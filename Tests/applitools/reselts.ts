
import { VisualGridRunner } from "@applitools/eyes-selenium"

export const printUrlOfTestResult = async (runner: VisualGridRunner, batchName: any) => {
    const resultTests = await runner.getAllTestResults(false);
    for (const result of resultTests) {
        if (result.getTestResults().isDifferent && result.getTestResults().getBatchName() === batchName) {
            console.log(result.getTestResults().getUrl());
        }
    }
}