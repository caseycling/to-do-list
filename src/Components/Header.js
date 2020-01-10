import React from 'react';

function Header(props) {
    console.log(props)
    return (
        <header style={headerStyle}>
            <h1 >Header</h1>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;