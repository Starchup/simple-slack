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

    if (!data || data === undefined || data === "") return;

    //Stringify error objects
    if (Object(data) === data) {
        var plainObject = {};
        Object.getOwnPropertyNames(data).forEach(function(key) {
            plainObject[key] = data[key];
        });
        data = JSON.stringify(plainObject, null, '\t');
    }
    if (data === "{}" || data === {}) return;

    var text;
    if (context) text = context + "\n\n" + data;
    else text = data;

    if (!uri) return console.log(text);

    var options = {
        method: 'POST',
        uri: uri,
        body: {
            "text": text
        },
        json: true
    };

    rp(options).catch(function(e) {
        console.log(text);
    });
};

module.exports = SIMPLE_SLACK;
