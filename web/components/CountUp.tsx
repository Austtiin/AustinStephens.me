"use client";

import { useCallback, useEffect, useRef } from 'react';

interface CountUpProps {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = ',',
  onStart,
  onEnd
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const startedRef = useRef(false);

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (latest: number) => {
      const hasDecimals = maxDecimals > 0;
      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };
      const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);
      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === 'down' ? to : from);
    }
  }, [from, to, direction, formatValue]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      if (typeof onStart === 'function') onStart();

      const startTime = performance.now() + delay * 1000;
      const endTime = startTime + duration * 1000;

      const step = (t: number) => {
        if (!ref.current) return;
        const now = t;
        const progress = Math.min(Math.max((now - startTime) / (endTime - startTime), 0), 1);
        const eased = easeOutCubic(progress);
        const current = direction === 'down' ? from - (from - to) * eased : from + (to - from) * eased;
        ref.current.textContent = formatValue(current);
        if (now < endTime) {
          requestAnimationFrame(step);
        } else {
          ref.current.textContent = formatValue(direction === 'down' ? to : to);
          if (typeof onEnd === 'function') onEnd();
        }
      };

      requestAnimationFrame(step);
    };

    if (startWhen) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              start();
              if (observerRef.current) observerRef.current.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );
      observerRef.current.observe(el);
    } else {
      start();
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [startWhen, duration, delay, direction, from, to, formatValue, onStart, onEnd]);

  return <span className={className} ref={ref} />;
}
