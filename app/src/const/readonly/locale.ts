/**
 * Keys are locale codes in RFC 5646 (what browsers use).
 * The `dir` property is the text direction.
 * @see [HTML `dir` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir)
 *
 * The `name` property is the localized name of the language.
 * @see [name source](https://en.wikipedia.org/wiki/List_of_language_names)
 */
export const LOCALE = {
  "en-GB": { dir: "ltr", name: "English" }
} as const;
