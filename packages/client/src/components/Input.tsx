import React, { CSSProperties, SyntheticEvent } from 'react';

const INPUT: CSSProperties = {
    fontSize: 16,
    borderRadius: 8,
    height: 48,
    paddingLeft: 8,
    paddingRight: 8,
    outline: 'none',
    background: 'white',
    border: '2px solid transparent',
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
};

export const Input = React.forwardRef(
    (
        props: {
            value?: string;
            placeholder?: string;
            maxLength?: number;
            style?: CSSProperties;
            onChange?: (event: SyntheticEvent) => void;
        },
        ref: any,
    ): React.ReactElement => {
        const { value, placeholder, style, maxLength, onChange } = props;

        return (
            <input
                ref={ref}
                type="text"
                value={value}
                style={{
                    ...INPUT,
                    ...style,
                }}
                maxLength={maxLength}
                placeholder={placeholder}
                onChange={onChange}
            />
        );
    },
);
