const hostname = location.hostname;
const reProdHost =/lingobus.com$/;

export default {
  a: !!hostname.match(/^(a[0-9]+)-/),
  local: !!hostname.match(/^(test-|localhost)/),
  prod: reProdHost.test(hostname),
  lang: (window.navigator.language || window.browserLanguage),
  debug () {
    if (this.prod) return;
    console.log.apply(console, arguments);
  },
  log () {
    console.log.apply(console, arguments);
  }
};
