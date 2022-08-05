import { interpolate } from 'remotion';

const interpolateAnimation = (
  spring: number,
  to: number | undefined,
  initialValue = 0,
  defaultValue = initialValue
) =>
  to === undefined
    ? defaultValue
    : interpolate(
        spring,
        [0, 1],
        [initialValue, to],
        ClampInterpolationOptions
      );

export const ClampInterpolationOptions = {
  extrapolateLeft: 'clamp',
  extrapolateRight: 'clamp',
} as const;

export default interpolateAnimation;
