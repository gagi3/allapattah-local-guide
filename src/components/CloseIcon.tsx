import React from 'react';

const CloseIcon = (props) => {
    const borderColor = props?.style?.borderColor || 'black';
    const hw = props?.hw || '25';
    return (
        <svg width={hw} height={hw} viewBox="0 0 10 10" fill={borderColor} xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_36_5)">
                <path
                    d="M6.31806 0.25H3.68194C1.78653 0.25 0.25 1.78653 0.25 3.68194V6.31806C0.25 8.21347 1.78653 9.75 3.68194 9.75H6.31806C8.21347 9.75 9.75 8.21347 9.75 6.31806V3.68194C9.75 1.78653 8.21347 0.25 6.31806 0.25Z"
                    fill="white" stroke={borderColor} strokeWidth="0.5" strokeLinecap="round"
                    strokeLinejoin="round" />
                <path d="M1.43005 1.43L8.52005 8.52" stroke={borderColor} strokeWidth="0.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.52005 1.43L1.43005 8.52" stroke={borderColor} strokeWidth="0.5"
                    strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_36_5">
                    <rect width="10" height="10" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default React.memo(CloseIcon);