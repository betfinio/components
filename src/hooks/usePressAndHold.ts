import { useCallback, useEffect, useRef } from 'react';

interface PressAndHoldOptions {
	/** Callback executed repeatedly while holding. */
	onHold: () => void;
	/** Callback executed once when the hold starts. */
	onHoldStart?: () => void;
	/** Callback executed once when the hold ends. */
	onHoldEnd?: () => void;
	/** Initial delay (ms) before the first onHold execution. Defaults to 0. */
	initialDelay?: number;
	/** Interval (ms) between onHold executions. Can be a fixed number or a function returning the next interval based on elapsed time (ms). Defaults to 150ms. */
	interval?: number | ((elapsedTime: number) => number);
	/** Minimum interval (ms) allowed when interval is dynamic. Defaults to 50ms. */
	minInterval?: number;
}

const DEFAULT_INTERVAL = 150;
const DEFAULT_MIN_INTERVAL = 50;

export const usePressAndHold = ({
	onHold,
	onHoldStart,
	onHoldEnd,
	initialDelay = 0,
	interval = DEFAULT_INTERVAL,
	minInterval = DEFAULT_MIN_INTERVAL,
}: PressAndHoldOptions) => {
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const startTimeRef = useRef<number | null>(null);
	const isHoldingRef = useRef(false);

	const calculateNextInterval = useCallback(
		(elapsedTime: number): number => {
			if (typeof interval === 'function') {
				return Math.max(interval(elapsedTime), minInterval);
			}
			return interval;
		},
		[interval, minInterval],
	);

	const tick = useCallback(() => {
		if (!isHoldingRef.current || !startTimeRef.current) return;

		onHold();

		const elapsedTime = Date.now() - startTimeRef.current;
		const nextInterval = calculateNextInterval(elapsedTime);

		timeoutRef.current = setTimeout(tick, nextInterval);
	}, [onHold, calculateNextInterval]);

	const stop = useCallback(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
		if (isHoldingRef.current) {
			isHoldingRef.current = false;
			startTimeRef.current = null;
			if (onHoldEnd) {
				onHoldEnd();
			}
		}
	}, [onHoldEnd]);

	const start = useCallback(() => {
		stop(); // Clear any existing timers
		isHoldingRef.current = true;
		startTimeRef.current = Date.now();

		if (onHoldStart) {
			onHoldStart();
		}

		// Execute first tick immediately or after initial delay
		if (initialDelay > 0) {
			timeoutRef.current = setTimeout(() => {
				if (isHoldingRef.current) {
					tick();
				}
			}, initialDelay);
		} else {
			tick();
		}
	}, [stop, onHoldStart, initialDelay, tick]);

	// Cleanup on unmount
	useEffect(() => {
		return stop;
	}, [stop]);

	return {
		onMouseDown: start,
		onMouseUp: stop,
		onMouseLeave: stop,
		onTouchStart: (e: React.TouchEvent) => {
			// Prevent mouse events from firing after touch
			e.preventDefault();
			start();
		},
		onTouchEnd: stop,
	};
};
