type Mode = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  mode: Mode = {},
  additional: string[] = []
): string =>
  [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mode)
      .filter(([_, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(' ');
