import * as React from 'react';

function BottomBanner() {
    const alertStyle = {
        padding: '10px',
        backgroundColor: 'olivedrab',
        color: 'white',
        marginBottom: '15px',
        position: 'absolute',
        bottom: '0',
        left: '30%',
        border: '5px solid darkolivegreen',
        borderRadius: '25px',
        fontSize: '14px',
        opacity: '0.8',
        maxWidth: '50%',
        height: '2rem'
    }
    const closeBtnStyle = {
        marginLeft: '15px',
        color: 'white',
        fontWeight: 'bold',
        float: 'right',
        fontSize: '22px',
        lineHeight: '20px',
        cursor: 'pointer',
        transition: '0.3s'
    }
    const h4Style = {
        margin: '0',
        fontStyle: 'italic',
        float: 'right'
    }
    const textStyle = {
        margin: '0',
        float: 'right',
        paddingRight: '10px'
    }
    const textStyle2 = {
        margin: '0',
        float: 'left'
    }
    return (
        <div className="alert" style={alertStyle}>
            <p style={textStyle2}>The Allapattah
                <br />Collaborative, CDC</p>
            <span className="closebtn" style={closeBtnStyle}>&times;</span>
            <div className="text-container" style={{ margin: 0, padding: '0 10px', lineHeight: '18px', textAlign: 'center' }}>
                <h4 style={h4Style}>ALLAPATTAH: EL NUESTRAS PALABRAS</h4>
                <p style={textStyle}><b>A Documentary about Allapattah - Watch Now</b></p>
            </div>
        </div >
    );
}

export default React.memo(BottomBanner);
