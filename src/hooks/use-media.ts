import { useMediaQuery as useMediaQueryLib } from 'react-responsive';

export const useMediaQuery = (customQuery?: string) => {
	// todo: @bf-san get breakpoints from tailwind config
	const isMobile = useMediaQueryLib({ query: '(max-width: 639px)' });
	const isTablet = useMediaQueryLib({ query: '(min-width: 640px) and (max-width: 1023px)' });
	const isTouch = useMediaQueryLib({ query: '(pointer: coarse)' });
	const isCustom = useMediaQueryLib({ query: customQuery || '(max-width: 639px)}' });
	const isVertical = isMobile;
	return { isMobile, isTablet, isVertical, isCustom, isTouch };
};
