#!/usr/bin/env node
//import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { HelloCloudNinjasStack } from '../lib/hello_cloud_ninjas-stack';

const app = new cdk.App();
new HelloCloudNinjasStack(app, 'HelloCloudNinjasStack');
app.run();
