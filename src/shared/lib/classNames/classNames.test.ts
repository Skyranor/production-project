import { classNames } from './classNames';

describe('classNames', () => {
  it('should work with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  it('should work with additional class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  it('should work with mode', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(expected);
  });

  it('work with false mode', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe(expected);
  });

  it('work with undefined', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2'])).toBe(expected);
  });
});
