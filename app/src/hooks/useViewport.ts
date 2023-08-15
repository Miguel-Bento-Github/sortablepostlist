import { useMediaQuery } from "./useMediaQuery";

export const useViewport = () => {
  const isSmall = useMediaQuery("(max-width: 380px) and (max-height: 600px)"); // uses `max-width` instead of `min-width`, use with caution
  const isMobile = useMediaQuery("(min-width: 380px)");
  const isTabletPortrait = useMediaQuery("(min-width: 768px)");
  const isTabletLandscape = useMediaQuery("(min-width: 1024px)");
  const isDesktopSmall = useMediaQuery("(min-width: 1366px)");
  const isDesktop = useMediaQuery("(min-width: 1920px)");

  return {
    isSmall,
    isMobile,
    isTabletPortrait,
    isTabletLandscape,
    isDesktopSmall,
    isDesktop
  };
};
