/* GitHub Repos, version 0.0.1
* (c) 2009 Jeff Rafter
*
* Based on GitHub Badge by Dr Nic Williams (but with the good code removed)
*
* You need: jquery.js
*--------------------------------------------------------------------------*/
 
var GitHubEmail = {
  Version: '0.0.1'
};
 
GitHubEmail = new function() {
  this.init = function(callback) {
    var url = "http://github.com/api/v2/json/user/emails?callback=GitHubEmail.load";
    this.request(url, callback)
  }
  
  this.load = function(data) {
    this.emails = data.emails;
  }
 
  this.request = function(url, callback) {
    // inserting via DOM fails in Safari 2.0, so brute force approach
    if ("jQuery" in window) {
      jQuery.getScript(url,callback);
    } else {
      onLoadStr = (typeof callback == "undefined") ? "" : 'onload="' + callback + '()"';
      document.write('<script ' + onLoadStr + 'type="text/javascript" src="'+url+'"></script>');
    }
  }
};