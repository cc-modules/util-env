const ConsoleLogger = require('util-console-logger');
const $logger = new ConsoleLogger('game');
export default {
  debug (...args) {
    if (this.prod) return;
    $logger.debug(...args);
  },
  info (...args) {
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
  }
};