import { useMediaQuery as useMediaQueryLib } from 'react-responsive';

export const useMediaQuery = (customQuery?: string) => {
	const isMobile = useMediaQueryLib({ query: '(max-width: 639px)' });
	const isTablet = useMediaQueryLib({ query: '(min-width: 640px) and (max-width: 1023px)' });
	const isCustom = useMediaQueryLib({ query: customQuery });
	const isVertical = isMobile;

	return { isMobile, isTablet, isVertical, isCustom };
};
