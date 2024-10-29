import { recordCustomEvent, addCustomAttributes } from 'newrelic';

console.log("Lambda Handler starting up");

export const handler = async (event: any, context: any) => {
    recordCustomEvent("MyNodeEvent", {
        "zip": "zap"
    });

    addCustomAttributes({
        "customAttribute": "customAttributeValue"
    });

    console.log("Hello, world");
    return "Success!";
};