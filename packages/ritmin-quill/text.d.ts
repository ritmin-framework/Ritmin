export default class Text {
    validateText(text: string, minLength?: number, maxLength?: number): boolean;
    toUpperCase(text: string): string;
    toLowerCase(text: string): string;
    replaceText(text: string, search: string, replacement: string): string;
    searchText(text: string, search: string): boolean;
    splitText(text: string, delimiter: string): string[];
}
