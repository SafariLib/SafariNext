import React from 'react';
import { expect, test } from 'vitest';
import { repeatElement } from './element';

test('repeatElement(): Should returns an array of the specified length', () => {
    const length = 3;
    const element = <div />;
    const result = repeatElement(length, element);
    expect(result).toHaveLength(length);
});

test('repeatElement(): Should fills the array with the specified element', () => {
    const length = 4;
    const element = <div />;
    const result = repeatElement(length, element);
    result.forEach(el => expect(el).toEqual(element));
});
