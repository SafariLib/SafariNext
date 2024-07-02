import { expect, test } from 'vitest';
import { resolveClass } from './classNames';

test('resolveClass(): With Classes and props, should return the correct className', () => {
    const base = 'SdButton';
    const props = {
        className: 'custom-class',
        loading: true,
        disabled: false,
        selected: true,
        fullWidth: false,
        onClick: () => void 0,
    };
    const result = resolveClass(base, props);
    expect(result).toBe('SdButton custom-class SdButton-loading SdButton-selected');
});

test('resolveClass(): With variant, should return the correct className', () => {
    const base = 'SdButton';
    const props = { variant: 'secondary' };
    const result = resolveClass(base, props);
    expect(result).toBe('SdButton SdButton-variant-secondary');
});

test('resolveClass(): With color, should return the correct className', () => {
    const base = 'SdButton';
    const props = { color: 'primary' };
    const result = resolveClass(base, props);
    expect(result).toBe('SdButton SdButton-color-primary');
});

test('resolveClass(): With undefined props, should return the correct className', () => {
    const base = 'SdButton';
    const result = resolveClass(base, undefined);
    expect(result).toBe('SdButton');
});
