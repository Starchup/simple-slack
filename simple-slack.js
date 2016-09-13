var rp = require('request-promise');

var context = "Unknown";
var uri;

var SIMPLE_SLACK = function(theUri, theContext) {
    var self = this;
    self.context = theContext;
    self.uri = theUri;
    self.ERR = function(e) {
        if (e) slackMsg(self.context, self.uri, e);
    };

    return self;
};

var slackMsg = function(context, uri, data) {

    if (Object(data) === data) data = JSON.stringify(data);

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

module.exports = SIMPLE_SLACK;
