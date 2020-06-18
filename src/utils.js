export function parseCSS(styleContent) {
  var doc = document.implementation.createHTMLDocument(""),
    styleElement = document.createElement("style");

  styleElement.textContent = styleContent;
  // the style will only be parsed once it is added to a document
  doc.body.appendChild(styleElement);

  return styleElement.sheet.cssRules;
};

export function wrapCSS(rules, className) {

    let result = "";

    for (let i = 0; i < rules.length; i++) {
        result += decorateRule(rules[i].cssText, className);
    }

    return result;
}

function decorateRule(rule, className) {
    let tokens = rule.split(' ');

    let i = 0;
    while (tokens[i] !== "{") {
        tokens[i] = `.${className} ${tokens[i]} `;
        i++;
    }

    return tokens.join(" ") + " ";
}