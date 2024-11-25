import * as React from 'react';
import btyb from './assets/images/btyb.png';
import CloseIcon from './components/CloseIcon';

function NotificationBar({ notificationBar, notificationBarOpen, setNotificationBarOpen }) {
    const style = {
        warning: {
            backgroundColor: 'tomato',
            borderColor: 'firebrick'
        },
        alert: {
            backgroundColor: 'darkorange',
            borderColor: 'chocolate'
        },
        info: {
            backgroundColor: 'olivedrab',
            borderColor: 'darkolivegreen'
        }
    };

    const alertStyle = {
        padding: '10px 20px',
        backgroundColor: style[notificationBar.category].backgroundColor,
        color: 'white',
        marginBottom: '15px',
        position: 'absolute',
        bottom: '0',
        left: '30%',
        border: `4px solid ${style[notificationBar.category].borderColor}`,
        borderRadius: '15px',
        fontSize: '16px',
        opacity: '0.8',
        maxWidth: '50%',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: 'JosefinSansBold'
    }
    const h4Style = {
        margin: '0',
        fontStyle: 'italic',
    }
    const textStyle = {
        margin: '0',
    }
    return notificationBarOpen
        ? (
            <div className="alert" style={alertStyle}>
                <img src={btyb} style={{ height: '100%' }} />
                <div className="text-container" style={{ fontFamily: 'JosefinSansMd', margin: 0, padding: '0 10px', lineHeight: '18px', textAlign: 'center' }}>
                    <h4 style={h4Style}>{notificationBar.title}</h4>
                    <p style={textStyle}><b>{notificationBar.content}</b></p>
                </div>
                <button onClick={() => setNotificationBarOpen(false)} style={{ background: 'none', border: 'none' }} >
                    <CloseIcon style={{ borderColor: style[notificationBar.category].borderColor }} hw='25' />
                </button>
            </div >
        )
        : (<></>);
}

export default React.memo(NotificationBar);
