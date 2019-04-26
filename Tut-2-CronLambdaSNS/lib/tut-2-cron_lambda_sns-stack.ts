import cdk = require('@aws-cdk/cdk');
import lambda = require("@aws-cdk/aws-lambda");

export class Tut2CronLambdaSnsStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

     new lambda.Function(this, "SNSNotifier", {
      runtime: lambda.Runtime.NodeJS810, // So we can use async in widget.js
      code: lambda.Code.directory("resources"),
      handler: "notifysns.main",
      environment: {
        //BUCKET: bucket.bucketName
      }
    });
  }
}
