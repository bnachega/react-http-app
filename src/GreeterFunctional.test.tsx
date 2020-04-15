import React from 'react';
import {render, fireEvent, getByText, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GreeterFunctional from './GreeterFunctional';


test('Greeting should update on last name being entered', () => {
    const {getByLabelText, getByText} = render(<GreeterFunctional/>);

    const firstNameField = getByLabelText(/First name/i);
    const lastNameField = getByLabelText(/Last name/i);

    fireEvent.change(firstNameField, {target: {value: 'Bhargav'}});
    fireEvent.change(lastNameField, {target: {value: 'Nachegari'}});

    const textValue = screen.getByText(/Hello Bhargav Nachegari/i);

    expect(textValue).toBeInTheDocument();

});