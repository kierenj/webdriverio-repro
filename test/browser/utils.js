var expect = require('expect.js');
var parse = require('url').parse;

exports.setupCommands = function(browser, timeout){

  browser.timeout = timeout || 5000;
  browser.addCommand('waitForUrl', waitForUrl.bind(browser));
  browser.addCommand('waitForExactText', waitForExactText.bind(browser));
  browser.addCommand('waitForBodyHtmlToContain', waitForBodyHtmlToContain.bind(browser));
  browser.addCommand('waitForBodyTextToContain', waitForBodyTextToContain.bind(browser));

  browser.addCommand('shouldExist', shouldExist.bind(browser));
  browser.addCommand('shouldNotExist', shouldNotExist.bind(browser));

}

function waitForUrl(url){
  return this.waitUntil(function(){
    return this.url().then(function(urlObj){
      return parse(urlObj.value).pathname == url;
    })
  }, this.timeout).then(function(result){
    if (!result) throw new Error('page did not navigate to url: "' + url + '"')
  })
}

function waitForBodyHtmlToContain(markup){
  return this.waitUntil(function() {
    return this.getHTML('body').then(function(result) {
      return result.indexOf(markup) != -1;
    })
  }, this.timeout).then(function(result){
    if (!result) throw new Error('body html did not contain: "' + markup + '"')
  })
}

function waitForBodyTextToContain(text){
  return this.waitUntil(function() {
    return this.getText('body').then(function(result) {
      return result.toLowerCase().indexOf(text.toLowerCase()) != -1;
    })
  }, this.timeout).then(function(result){
    if (!result) throw new Error('body text did not contain: "' + markup + '"')
  })
}

function waitForExactText(selector, text) {
  return this.waitUntil(function(){
    return this.getText(selector).then(function(resp){
      return text === resp;
    }).catch(function(err){
      return false;
    })
  }, this.timeout).then(function(result){
    if (!result) throw new Error('did not find a element with selector "' + selector + '" and text "' + text + '"');
  })
}

function shouldExist(selector){
  return this.isExisting(selector)
    .then(function(result){
      if (!result) throw new Error('expected element with selector "' + selector + '" to exist')
    })
}

function shouldNotExist(selector){
  return this.isExisting(selector)
    .then(function(result){
      if (result) throw new Error('expected element with selector "' + selector + '" to NOT exist')
    })
}
