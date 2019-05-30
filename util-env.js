const hostname = location.hostname;
const reProdHost =/vipkid.com.cn$/;
const ua = navigator.userAgent;

export default {
  a: !!hostname.match(/^(a[0-9]+)-/),
  local: !!hostname.match(/^(test-|localhost)/),
  prod: reProdHost.test(hostname),
  lang: (window.navigator.language || window.browserLanguage),
  debug () {
    if (this.prod) return;
    console.log.apply(console, arguments);
  },
  warn () {
    console.warn.apply(console, arguments);
  },
  error () {
    console.error.apply(console, arguments);
  },
  log () {
    console.log.apply(console, arguments);
  },
  isWechat () {
    return !!ua.match(/MicroMessenger/i)
  }
};
