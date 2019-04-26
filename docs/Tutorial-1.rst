============================================
Tutorial 1: Hello Cloud Engineering Ninjas
============================================

This project is a slight modification to the lambda-cron example in the cdk-examples repo.
https://github.com/senanayake/LearningCDK/tree/master/HelloCloudNinjas

The initial project was generated using 

cdk init app --language typescript

The HelloCloudNinjasStack object in  HelloCloudNinja/lib/hello_cloud_ninjas-stack.typescript initalizes a 
lambda.Function object that reads the ./lambda-handler.py file at run time execution of the CDK.
This definition shows how an Lambda function can be defined as an inline object.

This can be observed before deployment by executing the cdk synth command.



