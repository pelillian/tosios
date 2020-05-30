import React, { CSSProperties, ReactNode } from 'react';

const BOX = {
    background: '#512c75',
    color: 'white',
    border: 'none',
    borderRadius: 16,
    padding: 16,
    overflow: 'hidden',
};

export function Box(props: { style?: CSSProperties; children: ReactNode }): React.ReactElement {
    const { style, children } = props;

    return (
        <div
            style={{
                ...BOX,
                ...style,
            }}
        >
            {children}
        </div>
    );
}
