export type Modes = Record<string, boolean | string | undefined>;

export const classNames = (cls: string, mode: Modes = {}, additional: Array<string | undefined> = []): string =>
  [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mode)
      .filter(([_, value]) => Boolean(value))
      // eslint-disable-next-line @typescript-eslint/no-shadow
      .map(([cls]) => cls),
  ].join(' ');
