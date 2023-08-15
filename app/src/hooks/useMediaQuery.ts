import { ref } from "vue";

/**
 * @param mediaQuery
 * A string representing a serialized media query, eg:
 * `(min-width: 768px)`
 *
 * @returns if the `window` currently matches the media query list
 */
export const useMediaQuery = (mediaQuery: string) => {
  const screenQuery = window.matchMedia(mediaQuery);
  const isMatch = ref(screenQuery.matches);

  screenQuery.onchange = ({ matches }) => {
    isMatch.value = matches;
  };
  return isMatch;
};
