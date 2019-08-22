const hostname = location.hostname;
const reProdHost =/vipkid.com.cn$/;
const ua = navigator.userAgent;
const ConsoleLogger = require('util-console-logger');
const $logger = new ConsoleLogger('game');
export default {
  a: !!hostname.match(/^(a[0-9]+)-/),
  local: !!hostname.match(/^(test-|localhost)/),
  prod: reProdHost.test(hostname),
  lang: (window.navigator.language || window.browserLanguage),
  debug (...args) {
    if (this.prod) return;
    $logger.debug(...args);
  },
  info () {
    $logger.info(...args);
  },
  warn (...args) {
    $logger.warn(...args);
  },
  error (...args) {
    $logger.error(...args);
  },
  log (...args) {
    $logger.log(...args);
  },
  group(...args) {
    $logger.group(...args);
  },
  groupCollapsed(...args) {
    $logger.groupCollapsed(...args);
  },
  groupEnd() {
    $logger.groupEnd();
  },
  isWechat () {
    return !!ua.match(/MicroMessenger/i)
  }
};