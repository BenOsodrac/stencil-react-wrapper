'use strict';

function format(first, middle, last) {
  return ((first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : ''));
}
function setStyleAttribute(element, cssProperty, ruleValue) {
  if (element) {
    if (cssProperty !== '' && ruleValue !== undefined) {
      element.style.setProperty(cssProperty, ruleValue.toString());
    }
  }
  else {
    throw Error(`The element does not exist, when trying to apply the rule '${cssProperty}'.`);
  }
}

exports.format = format;
exports.setStyleAttribute = setStyleAttribute;

//# sourceMappingURL=utils-9d8b76a4.js.map