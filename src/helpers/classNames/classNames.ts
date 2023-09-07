type Mode = Record<string, boolean | string>;

export const classNames = (cls: string, mode: Mode, additional: string[]): string => {
  return [
    cls,
    ...additional,
    ...Object.entries(mode)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(' ');
};
