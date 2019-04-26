#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { Tut2CronLambdaSnsStack } from '../lib/tut-2-cron_lambda_sns-stack';

const app = new cdk.App();
new Tut2CronLambdaSnsStack(app, 'Tut2CronLambdaSnsStack');
app.run();
