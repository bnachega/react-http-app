import React from 'react'

interface TextInputProps {
    label?: string;
    id: string;
    updateField?: ((text: string) => void);
    value?: string;
}

function TextInput(props: TextInputProps) {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <input type="text" 
            id={props.id}
            className="form-control" 
            onChange={(event) => props.updateField && props.updateField(event.currentTarget.value)}
            value={props.value}/>
    </div>
    )
}

export default TextInput
