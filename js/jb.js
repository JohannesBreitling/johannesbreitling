const style = getComputedStyle(document.body);
const langs = [ {name: "Deutsch", abb: "de"}, {name: "Englisch", abb: "en"} ];

let translator = new Translator(translations, "en", langs);
translator.translate();