var rp = require('request-promise');

var context = "Unkown";
var uri;

var SIMPLE_SLACK = function(theUri, theContext) {
    context = theContext;
    uri = theUri;
};

var slackMsg = function(data) {
    var text;
    if (context) text = context + "\n\n" + data;
    else text = data;

    var options = {
        method: 'POST',
        uri: uri,
        body: {
            "text": text
        },
        json: true
    };

    rp(options).catch(function(e) {
        console.log('Error posting to Slack');
        console.log(e);
    });
};

SIMPLE_SLACK.prototype.ERR = function(e) {
    if (e) slackMsg(e);
};
module.exports = SIMPLE_SLACK;