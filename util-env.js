const hostname = location.hostname;
export default {
  a: !!hostname.match(/^(a[0-9]+)-/),
  local: !!hostname.match(/^(test-|localhost)/),
  prod: /lingobus.com$/.test(hostname),
  lang: (window.navigator.language || window.browserLanguage)
};
