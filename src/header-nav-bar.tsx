import * as React from 'react';

function HeaderNavBar() {
    const headerStyle = {

    };
    const buttonStyle = (color) => {
        return {
            color: "white",
            backgroundColor: color,
            padding: '0 10px',
            marginRight: '5px',
            textAlign: 'center',
            opacity: '0.8',
            textDecoration: 'none'
        };
    };
    return (
        <div className="header">
            <div className="links" style={{ marginTop: 'unset' }}>
                <a
                    href="#"
                    target="_new"
                    style={buttonStyle('red')}>
                    <h1>Little Santo Domingo</h1>
                </a>

                <a
                    href="#"
                    target="_new"
                    style={buttonStyle('darkorange')}>
                    <h1>Historical Guide</h1>
                </a>
            </div>
        </div>
    );
}

export default React.memo(HeaderNavBar);
