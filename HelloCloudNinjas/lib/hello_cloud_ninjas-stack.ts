import cdk = require('@aws-cdk/cdk');
import events = require('@aws-cdk/aws-events');
import lambda = require('@aws-cdk/aws-lambda');

import fs = require('fs');


export class HelloCloudNinjasStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string) {
    super(scope, id);

    const lambdaFn = new lambda.Function(this, 'Singleton', {
      code: new lambda.InlineCode(fs.readFileSync('lambda-handler.py', { encoding: 'utf-8' })),
      handler: 'index.main',
      timeout: 300,
      runtime: lambda.Runtime.Python27,
    });

    // Run every day at 6PM UTC
    // See https://docs.aws.amazon.com/lambda/latest/dg/tutorial-scheduled-events-schedule-expressions.html
    const rule = new events.EventRule(this, 'Rule', {
      scheduleExpression: 'cron(0 18 ? * MON-FRI *)',
    });
    rule.addTarget(lambdaFn);
  }
}