# Simple slack
Simple slack error message logger

#### Initialization

`var simpleSlack = require('simple-slack');`  
`var SLACK = new simpleSlack(uri/path/to/webhook, context);`


#### Basic use
try {
	...	
}
catch (e)
{
	SLACK.ERR('Error' + "\n\n" + e.stack);
}
