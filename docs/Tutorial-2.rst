==============================================
Tutorial 2: Notification updates on Schedule
==============================================

The first example deployed a lambda function that was executed on a cron schedule.
The function didn't do anything useful and didn't interact with Amazon Services.

This example constructs a cron driven lambda funtion that posts a time based message to SNS.
This pattern could be used as part of a time driven broadcast architecture.


