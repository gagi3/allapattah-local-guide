import React from 'react';

const OpenSignIcon = (props) => {
    const height = props?.height || '49';
    const width = props?.width || '70';
    return (
        <svg width={width} height={height} viewBox="0 0 70 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M63.7539 13.3778L3.51682 18.2032C2.48184 18.2861 1.71003 19.1924 1.79294 20.2273L3.79481 45.2173C3.87771 46.2523 4.78394 47.0241 5.81892 46.9412L66.056 42.1158C67.0909 42.0329 67.8627 41.1266 67.7798 40.0917L65.778 15.1017C65.6951 14.0667 64.7888 13.2949 63.7539 13.3778Z" fill="#FE6148" />
            <path d="M5.80456 48.17C3.93456 48.17 2.34456 46.7 2.19456 44.83L0.244558 20.57C0.0845578 18.58 1.57456 16.82 3.57456 16.67L19.0046 15.43L28.4446 4.34C28.5846 2.18 30.2946 0.44 32.4646 0.26C32.5846 0.26 32.7046 0.25 32.8146 0.25C34.8446 0.25 36.6246 1.67 37.0746 3.65L48.1646 13.09L63.5946 11.85C63.6946 11.85 63.7946 11.84 63.8846 11.84C65.7646 11.84 67.3446 13.31 67.4946 15.18L69.4346 39.45C69.5946 41.44 68.1046 43.19 66.1146 43.35L6.09456 48.16C5.99456 48.16 5.89456 48.17 5.80456 48.17ZM63.8146 14.68L3.79456 19.49C3.35456 19.53 3.03456 19.91 3.06456 20.34L5.00456 44.61C5.03456 45.02 5.38456 45.34 5.79456 45.34L64.7146 40.62C65.2346 40.58 65.7046 40.33 66.0446 39.94C66.3846 39.54 66.5446 39.03 66.5046 38.51L64.6546 15.41C64.6246 15 64.2746 14.68 63.8646 14.68V14.43L63.8046 14.68H63.8146ZM22.9946 15.11L44.1746 13.41L36.5446 6.91C35.8146 8.1 34.5746 8.87 33.1646 8.99C33.0446 8.99 32.9246 9 32.8146 9C31.5446 9 30.3246 8.43 29.5046 7.47L23.0046 15.1L22.9946 15.11ZM32.6846 3.09C32.2746 3.12 31.9046 3.31 31.6346 3.63C31.3646 3.94 31.2346 4.34 31.2746 4.75C31.3346 5.55 32.0146 6.17 32.8146 6.17H32.9346C33.7846 6.1 34.4146 5.35 34.3546 4.5C34.2946 3.7 33.6146 3.08 32.8146 3.08H32.6946L32.6846 3.09Z" fill="black" />
            <path d="M32.8146 0.5C34.7746 0.5 36.4546 1.89 36.8546 3.79L48.0846 13.36L63.6146 12.12C63.7046 12.12 63.7946 12.11 63.8846 12.11C65.6246 12.11 67.1046 13.45 67.2446 15.22L69.1846 39.49C69.3346 41.35 67.9446 42.98 66.0846 43.13L6.06456 47.94C5.97456 47.94 5.88456 47.95 5.79456 47.95C4.05456 47.95 2.57456 46.61 2.43456 44.84L0.494564 20.55C0.344564 18.69 1.73456 17.06 3.59456 16.91L19.1246 15.67L28.6946 4.44C28.7846 2.39 30.3946 0.68 32.4846 0.51C32.5946 0.51 32.7046 0.5 32.8146 0.5ZM32.8146 6.42C32.8146 6.42 32.9146 6.42 32.9546 6.42C33.9446 6.34 34.6746 5.47 34.6046 4.49C34.5246 3.55 33.7446 2.84 32.8146 2.84C32.7646 2.84 32.7146 2.84 32.6746 2.84C31.6846 2.92 30.9546 3.79 31.0246 4.77C31.1046 5.71 31.8846 6.42 32.8146 6.42ZM32.8046 8.76C31.4646 8.76 30.2546 8.11 29.4946 7.09L22.4046 15.41L44.7846 13.62L36.4646 6.53C35.8246 7.75 34.6046 8.63 33.1346 8.74C33.0246 8.74 32.9146 8.75 32.8046 8.75M5.80456 45.59C5.80456 45.59 5.86456 45.59 5.88456 45.59L64.7446 40.88C65.9546 40.78 66.8646 39.72 66.7746 38.5L64.9246 15.4C64.8846 14.85 64.4246 14.44 63.8846 14.44C63.8546 14.44 63.8246 14.44 63.8046 14.44L3.77456 19.24C3.20456 19.29 2.77456 19.79 2.81456 20.36L4.75456 44.63C4.79456 45.18 5.25456 45.59 5.79456 45.59M32.8146 0C32.6946 0 32.5646 0 32.4446 0.01C30.1846 0.19 28.3846 1.99 28.2046 4.24L18.8846 15.19L3.56456 16.42C2.53456 16.5 1.59456 16.98 0.924564 17.77C0.254564 18.56 -0.0754358 19.56 0.0145642 20.59L1.95456 44.86C2.11456 46.86 3.81456 48.43 5.81456 48.43C5.91456 48.43 6.02456 48.43 6.12456 48.42L66.1446 43.61C67.1746 43.53 68.1146 43.05 68.7846 42.26C69.4546 41.47 69.7846 40.47 69.6946 39.44L67.7546 15.17C67.5946 13.17 65.8946 11.6 63.8946 11.6C63.7946 11.6 63.6846 11.6 63.5846 11.61L48.2646 12.84L37.3146 3.52C36.7946 1.47 34.9346 0 32.8146 0ZM32.8146 5.92C32.1446 5.92 31.5846 5.4 31.5246 4.73C31.4946 4.39 31.6046 4.05 31.8346 3.79C32.0546 3.53 32.3746 3.37 32.7146 3.34C32.7546 3.34 32.7846 3.34 32.8146 3.34C33.4846 3.34 34.0446 3.86 34.1046 4.53C34.1646 5.24 33.6246 5.87 32.9146 5.92C32.8846 5.92 32.8446 5.92 32.8146 5.92ZM32.8046 9.26C32.9246 9.26 33.0546 9.26 33.1746 9.25C34.5646 9.14 35.8046 8.42 36.5846 7.3L43.5446 13.22L23.5746 14.82L29.4946 7.86C30.3646 8.74 31.5546 9.26 32.8046 9.26ZM5.80456 45.09C5.52456 45.09 5.28456 44.87 5.26456 44.59L3.32456 20.32C3.30456 20.02 3.52456 19.76 3.82456 19.74L63.8446 14.93C64.1646 14.93 64.4046 15.15 64.4246 15.43L66.2746 38.53C66.3446 39.47 65.6446 40.3 64.7046 40.37L5.84456 45.08H5.80456V45.09Z" fill="white" />
            <path d="M19.8545 24.49L16.3945 24.77C14.9045 24.89 13.7945 26.19 13.9145 27.68L14.5545 35.64C14.6745 37.13 15.9745 38.24 17.4645 38.12L20.9245 37.84C22.4145 37.72 23.5245 36.42 23.4045 34.93L22.7645 26.97C22.6445 25.48 21.3445 24.37 19.8545 24.49ZM20.9945 33.96C21.0645 34.81 20.4245 35.55 19.5845 35.62L17.2945 35.8C17.0945 35.82 16.9145 35.66 16.8945 35.46L16.2545 27.5C16.2345 27.3 16.3945 27.12 16.5945 27.1L20.0545 26.82C20.2645 26.8 20.4345 26.96 20.4545 27.16L20.9945 33.96Z" fill="white" />
            <path d="M31.4645 23.56L24.4945 24.12L25.4745 36.32C25.5245 36.96 26.0845 37.44 26.7345 37.39C27.3845 37.34 27.8545 36.78 27.8045 36.13L27.5045 32.43L32.1445 32.06C33.1845 31.98 33.9545 31.07 33.8745 30.03L33.4945 25.3C33.4145 24.26 32.5045 23.49 31.4645 23.57V23.56ZM31.2045 25.92L31.5145 29.76L27.3145 30.1L27.0045 26.26L31.2045 25.92Z" fill="white" />
            <path d="M53.7446 21.77C53.1046 21.82 52.6246 22.38 52.6746 23.03L53.2146 29.81L48.2646 22.79C47.9646 22.36 47.4046 22.19 46.9146 22.36C46.4246 22.54 46.1046 23.03 46.1446 23.55L47.0246 34.58C47.0746 35.22 47.6346 35.7 48.2846 35.65C48.9346 35.6 49.4046 35.04 49.3546 34.39L48.8146 27.61L53.7646 34.63C54.0046 34.97 54.4046 35.15 54.8146 35.12C54.9146 35.12 55.0146 35.09 55.1146 35.05C55.6046 34.87 55.9246 34.38 55.8846 33.86L55.0046 22.83C54.9546 22.19 54.3946 21.71 53.7446 21.76V21.77Z" fill="white" />
            <path d="M43.1545 24.97C43.7945 24.92 44.2745 24.36 44.2245 23.71C44.1745 23.06 43.6145 22.59 42.9645 22.64L35.2745 23.26L36.3445 36.62L44.0345 36C44.6745 35.95 45.1545 35.39 45.1045 34.74C45.0545 34.09 44.4945 33.62 43.8445 33.67L38.4845 34.1L38.2345 31.03L40.3345 30.86C40.9745 30.81 41.4545 30.25 41.4045 29.6C41.3545 28.95 40.7945 28.48 40.1445 28.53L38.0445 28.7L37.7845 25.39L43.1445 24.96L43.1545 24.97Z" fill="white" />
        </svg>

    );
}

export default React.memo(OpenSignIcon);