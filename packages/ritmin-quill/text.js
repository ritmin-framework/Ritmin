export default class Text {
    validateText(text, minLength = 0, maxLength = Infinity) {
        return typeof text === 'string' && text.length >= minLength && text.length <= maxLength;
    }
    toUpperCase(text) {
        return text.toUpperCase();
    }
    toLowerCase(text) {
        return text.toLowerCase();
    }
    replaceText(text, search, replacement) {
        return text.replace(new RegExp(search, 'g'), replacement);
    }
    searchText(text, search) {
        return text.includes(search);
    }
    splitText(text, delimiter) {
        return text.split(delimiter);
    }
}
//# sourceMappingURL=text.js.map