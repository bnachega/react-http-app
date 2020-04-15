//test files can be:
//Foo.test.tsx
//Foo.spec.tsx
//__tests__/Foo.tsx

//Can use 'test' or 'it'

import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextInput from './TextInput'

test('Description', () => {
    expect(1+1).toEqual(2);
});

test('TextInput', () => {
    const labelText = 'Some Label';
    const {getByLabelText} = render(<TextInput id="test" label={labelText}/>);
    const element = getByLabelText(labelText);

    expect(element).toBeInTheDocument();
});

test('TextInput updateField event handler runs', () => {
    const label = 'Test label';
    const id = 'testId';
    const handler = jest.fn();
    const {getByLabelText} = render(<TextInput label={label} id={id} updateField={handler}/>);

    const element = getByLabelText(label);
    fireEvent.change(element, {target: {value: 'foo'}});

    expect(handler).toHaveBeenCalled();

});

export {};