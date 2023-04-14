class Translator {

    translations;
    selectedLang;
    langs;

    constructor(translations, defaultLang, langs) {
        this.translations = translations;
        this.selectedLang = defaultLang;
        this.langs = langs;
    }

    getTranslation(pathString) {
        let path = pathString.split(".");
        let translation = this.translations[this.selectedLang];
            
        for (let key of path) {
            translation = translation[key];
        }

        return translation;
    }

    translateInnerText() {
        let items = document.querySelectorAll("[data-jb-t-inner-text]");
        
        for (let element of items) {
            let pathString = element.dataset.jbTInnerText;
            let translation = this.getTranslation(pathString);

            element.innerText = translation;
        }
    }

    translate() {
        // Translate all elements with inner text
        this.translateInnerText();
    }

}
