/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function($, nil, emptyString, undefined) {
  $.cookie = function(key, value, options) {

    // key and at least value given, set cookie...
    if (arguments.length && (!/Object/.test(Object.prototype.toString.call(value)) || value === nil || value === undefined)) {
      options = options || {};

      if (value === nil || value === undefined) {
        options.expires = -1;
      }

      if (typeof options.expires === 'number') {
        var days = options.expires, t = options.expires = new Date();
        t.setDate(t.getDate() + days);
      }

      value = String(value);

      return (
        document.cookie = [
          encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
          options.expires ? '; expires=' + options.expires.toUTCString() : emptyString, // use expires attribute, max-age is not supported by IE
          options.path    ? '; path=' + options.path : emptyString,
          options.domain  ? '; domain=' + options.domain : emptyString,
          options.secure  ? '; secure' : emptyString
        ].join(emptyString)
      );
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var decode = options.raw ? function(s) { return s; } : decodeURIComponent;

    var pairs = document.cookie.split('; ');
    for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
      if (decode(pair[0]) === key) return decode(pair[1] || emptyString); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
    }
    return nil;
  };
})(
  jQuery,
  null,
  ''
);
