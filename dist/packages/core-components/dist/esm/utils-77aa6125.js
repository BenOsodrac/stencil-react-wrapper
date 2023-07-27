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

export { format as f, setStyleAttribute as s };

//# sourceMappingURL=utils-77aa6125.js.map