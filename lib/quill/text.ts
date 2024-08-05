// Class that provides a set of functions for text processing.
export default class Text {
  // Validates the text based on minimum and maximum length.
  // @param text - The text to be validated.
  // @param minLength - The minimum acceptable length for the text.
  // @param maxLength - The maximum acceptable length for the text.
  // @returns - `true` if the text meets the requirements, otherwise `false`.
  public validateText(
    text: string,
    minLength: number = 0,
    maxLength: number = Infinity,
  ): boolean {
    return (
      typeof text === 'string' &&
      text.length >= minLength &&
      text.length <= maxLength
    );
  }

  // Converts the text to uppercase.
  // @param text - The text to be converted.
  // @returns - The text converted to uppercase.
  public toUpperCase(text: string): string {
    return text.toUpperCase();
  }

  // Converts the text to lowercase.
  // @param text - The text to be converted.
  // @returns - The text converted to lowercase.
  public toLowerCase(text: string): string {
    return text.toLowerCase();
  }

  // Replaces all occurrences of a search string in the text with a replacement string.
  // @param text - The text to perform the replacement on.
  // @param search - The string to search for.
  // @param replacement - The string to replace the search string with.
  // @returns - The text after the replacement.
  public replaceText(
    text: string,
    search: string,
    replacement: string,
  ): string {
    return text.replace(new RegExp(search, 'g'), replacement);
  }

  // Searches for a specific text within the given text.
  // @param text - The text to search within.
  // @param search - The text to search for.
  // @returns - `true` if the text contains the search string, otherwise `false`.
  public searchText(text: string, search: string): boolean {
    return text.includes(search);
  }

  // Splits the text into an array based on the specified delimiter.
  // @param text - The text to be split.
  // @param delimiter - The delimiter to use for splitting the text.
  // @returns - An array of strings after splitting.
  public splitText(text: string, delimiter: string): string[] {
    return text.split(delimiter);
  }
}
