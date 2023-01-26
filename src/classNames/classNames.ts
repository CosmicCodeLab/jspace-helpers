/**
 * Take array of classes and return this array in one string with comma separation
 * @param classes - Array of string
 * @example```tsx
 * <div className={classNames('my-class', 'my-second-class', 'my-third-class')}>
 *   Styled div
 * </div>
 * ```
 * @returns The total classes with comma separation
 */
export const classNames = (...classes: string[]): string =>
  classes.filter(Boolean).join(' ').trim()
