'use strict';

(function(window) {
  /**
   * @parameters milliseconds
   * @returns nothing
   */
  function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e308; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

  function invert(object) {
    var newObject = {};

    for (var prop in object) {
      if(object.hasOwnProperty(prop)) {
        newObject[object[prop]] = prop;
      }
    }

    return newObject;
  }

  function generateGID() {
    return new Date().getTime().toString();
  }

  window.util = {
    sleep: sleep,
    invert: invert,
    generateGID: generateGID
  };
})(window);