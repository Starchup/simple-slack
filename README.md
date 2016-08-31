# Simple slack
Simple slack error message logger


#### Installation

npm install simple-slack


#### Initialization

```
var simpleSlack = require('simple-slack');
var SLACK = new simpleSlack(webhook, context);
```


#### Example
```
var SLACK = new simpleSlack("https://hooks.slack.com/services/abc", "main.js");
SLACK.ERR("Failed to do something:\n\n" + data);
```
