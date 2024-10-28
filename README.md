# CDK TypeScript project to test Nodejs Lambda

This project was created using the [aws documentation for CDK](https://docs.aws.amazon.com/cdk/v2/guide/hello_world.html)
to test Nodejs lambda instrumentation with New Relic using wrapper handler.

Steps followed:
* `cdk init app --language typescript` to create blank template
* `cdk bootstrap` to bootstrap environment

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands
* `cdk bootstrap`   cdk bootstrap 
* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
