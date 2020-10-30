import React from 'react'

const Key = ({ children }) => {

    const style = {
        width: '6%',
        height: 'auto',
        margin: '0px 5px',
        backgroundColor: 'white',
        textAlign: 'center'

    }

    const key = '';
    const spaceBar = '';
    const dele = '';
    const tab = '';
    const entr = '';
    const shft = '';
    const ctrl = '';
    const alt = '';



    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Key
