import React from "react";

type Types = {
    type: string;
    width: string;
    height: string
}

const Icons = ({type, width, height}: Types) => {
    switch (type) {
        case 'logo':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width={width} height={height}>
                    <circle cx="6.79412" cy="5.74407" r="3.29412" fill="#50ADBB"/>
                    <circle cx="6.79412" cy="13.65" r="3.29412" fill="#50ADBB" fillOpacity="0.6"/>
                    <ellipse cx="6.79412" cy="21.5558" rx="3.29412" ry="3.29412" fill="#50ADBB" fillOpacity="0.3"/>
                    <ellipse cx="14.7" cy="5.74407" rx="3.29412" ry="3.29412" fill="#50ADBB" fillOpacity="0.01"/>
                    <ellipse cx="14.7" cy="13.65" rx="3.29412" ry="3.29412" fill="#50ADBB" fillOpacity="0.9"/>
                    <ellipse cx="14.7" cy="21.5558" rx="3.29412" ry="3.29412" fill="#50ADBB" fillOpacity="0.6"/>
                    <circle cx="22.6059" cy="5.74407" r="3.29412" fill="#50ADBB" fillOpacity="0.01"/>
                    <circle cx="22.6059" cy="13.65" r="3.29412" fill="#50ADBB" fillOpacity="0.01"/>
                    <ellipse cx="22.6059" cy="21.5558" rx="3.29412" ry="3.29412" fill="#50ADBB"/>
                </svg>
            )
        case 'rs':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24" fill="none">
                    <g>
                        <path d="M5.00668 14.9834L5.03196 13.2949H5.03227C5.03227 12.4173 5.23692 11.7996 5.5738 11.3702C5.8634 11.0011 6.34429 10.7576 7.17221 10.7576C7.83363 10.7576 8.74797 10.9578 9.94283 11.4113L10.7619 11.7222L10.8736 10.9311C11.1322 11.7527 11.6339 12.4249 12.3998 12.9041L12.4061 12.9081L12.4126 12.9119C12.5516 12.9949 12.6952 13.0722 12.8431 13.1438L10.4392 16.4577L10.0032 17.0587L10.6287 17.4585C11.9823 18.3239 13.4267 18.9738 14.9603 19.407L14.9602 19.4071L14.9696 19.4096C16.5083 19.8214 18.0275 20.029 19.5256 20.029C22.1136 20.029 24.2308 19.6064 25.8118 18.6919L25.8118 18.6919L25.8173 18.6887C27.4924 17.6996 28.3105 16.0964 28.3105 14.02C28.3105 12.5599 27.7197 11.3991 26.5217 10.6544C26.1779 10.4407 25.7975 10.2633 25.3828 10.1199L27.9571 7.4915L28.5215 6.91519L27.8714 6.43758C26.7403 5.60654 25.4433 4.99342 23.9889 4.59298C22.566 4.17936 21.1458 3.9709 19.7303 3.9709C16.9341 3.9709 14.7053 4.39778 13.1312 5.33738C12.4225 5.75267 11.8592 6.25545 11.4508 6.84121L11.7031 5.0536L11.8001 4.36643L11.1138 4.26351C10.6168 4.18899 10.1045 4.15218 9.57721 4.15218C8.04754 4.15218 6.73264 4.5029 5.69082 5.2648C5.22285 5.60703 4.8241 6.02191 4.49135 6.50326L4.14875 4.79243L4.03054 4.20213L3.4292 4.23066C2.3419 4.28225 1.49318 4.30757 0.878282 4.30757C0.29761 4.30757 -0.551007 4.28227 -1.67364 4.23062L-2.44661 4.19505L-2.40479 4.96772C-2.26892 7.47756 -2.20113 9.83017 -2.20113 12.0259C-2.20113 14.2215 -2.26892 16.5567 -2.40476 19.0317L-2.44528 19.7701H-1.70581H4.40902H5.14154L5.1083 19.0383C5.04055 17.5467 5.00678 16.1953 5.00668 14.9834ZM18.0417 9.8497C17.9 9.8497 17.8184 9.82361 17.7706 9.79788C17.7701 9.79334 17.7697 9.78762 17.7695 9.78062C17.7718 9.7766 17.776 9.76993 17.7835 9.7602C17.8151 9.7192 17.8916 9.64519 18.0543 9.553C18.3547 9.38268 18.7419 9.28147 19.2442 9.28147C20.0348 9.28147 20.8181 9.3854 21.5955 9.59418L21.6037 9.59637L21.6118 9.59835C21.6715 9.61284 21.7316 9.62819 21.7921 9.6444C21.1639 9.6537 20.2959 9.69741 19.1958 9.77368L19.1847 9.77445L19.1737 9.77556C18.6705 9.8265 18.2968 9.8497 18.0417 9.8497ZM17.7673 9.7854C17.7672 9.78541 17.7674 9.78477 17.7681 9.78341C17.7677 9.78471 17.7674 9.78539 17.7673 9.7854ZM19.3977 14.2782C18.7014 14.2782 17.843 14.1462 16.812 13.8633C17.6584 13.8525 18.4859 13.8001 19.2943 13.7059C19.4518 13.6901 19.6617 13.6736 19.9269 13.6569C20.2063 13.6402 20.4473 13.6323 20.6513 13.6323C20.9156 13.6323 21.0293 13.6902 21.0724 13.7229C21.0835 13.7314 21.0887 13.7371 21.0906 13.7394C21.0914 13.7404 21.092 13.7412 21.0925 13.7419C21.0929 13.7426 21.0932 13.7431 21.0934 13.7437L21.0935 13.7437C21.094 13.7448 21.1027 13.763 21.1027 13.8128C21.1027 13.8294 21.1013 13.8407 21.0823 13.866C21.0563 13.9008 20.9906 13.9665 20.8421 14.0453C20.5749 14.179 20.1158 14.2782 19.3977 14.2782Z" stroke="#909296"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_2212_210787">
                            <rect width="32" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            )
        default:
            return null
    }
}

export default Icons