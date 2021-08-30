import React from 'react';

import "../../css/status.css"

const Status = () => {
    return ( 
        <div className="status">
            <div className="top">
                <h1>Ваши университеты</h1>
                <div>
                    <img src="https://picsum.photos/70" alt="" />
                    <h2>Nargiza Akhmedova <span>IT Specialist</span></h2>
                </div>
            </div>
            <div className="bottom">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M120.2 182.164C118.551 182.575 116.87 182.94 115.201 183.248C110.838 184.059 107.953 188.255 108.76 192.622C109.159 194.77 110.379 196.559 112.036 197.728C113.743 198.929 115.916 199.472 118.13 199.06C120.117 198.691 122.12 198.257 124.086 197.767C128.394 196.694 131.019 192.33 129.944 188.024C128.872 183.714 124.511 181.091 120.2 182.164Z" fill="#00587F"/>
                    <path d="M179.658 74.3969C180.221 76.0942 181.296 77.4798 182.654 78.4373C184.668 79.8556 187.303 80.3328 189.818 79.5013C194.033 78.1015 196.317 73.5555 194.923 69.3418C194.287 67.4209 193.582 65.494 192.831 63.6178C191.182 59.4949 186.505 57.4876 182.38 59.1368C178.259 60.7851 176.251 65.4631 177.902 69.5873C178.533 71.1643 179.124 72.7829 179.658 74.3969Z" fill="#00587F"/>
                    <path d="M146.326 170.685C144.908 171.621 143.444 172.527 141.969 173.377C138.122 175.596 136.804 180.514 139.022 184.359C139.625 185.405 140.427 186.26 141.351 186.914C143.831 188.659 147.2 188.92 150.004 187.305C151.757 186.294 153.501 185.218 155.19 184.101C158.893 181.654 159.912 176.666 157.464 172.961C155.017 169.254 150.031 168.236 146.326 170.685Z" fill="#00587F"/>
                    <path d="M199.925 96.8526C199.75 92.4149 196.013 88.9609 191.574 89.1342C187.14 89.3092 183.684 93.0482 183.858 97.4841C183.925 99.1802 183.942 100.902 183.903 102.596C183.84 105.379 185.201 107.859 187.317 109.35C188.577 110.238 190.106 110.775 191.764 110.813C196.202 110.911 199.879 107.391 199.978 102.951C200.022 100.927 200.005 98.8758 199.925 96.8526Z" fill="#00587F"/>
                    <path d="M178.348 149.534C174.789 146.864 169.755 147.589 167.09 151.141C166.069 152.501 164.994 153.845 163.894 155.138C161.017 158.518 161.424 163.593 164.803 166.472C164.995 166.635 165.19 166.785 165.392 166.926C168.752 169.295 173.421 168.75 176.137 165.563C177.451 164.019 178.732 162.414 179.952 160.79C182.618 157.238 181.896 152.2 178.348 149.534Z" fill="#00587F"/>
                    <path d="M190.167 120.47C185.93 119.141 181.418 121.5 180.091 125.737C179.582 127.356 179.019 128.982 178.411 130.575C177.076 134.081 178.355 137.939 181.288 140.007C181.825 140.385 182.418 140.705 183.061 140.948C187.21 142.531 191.855 140.45 193.436 136.3C194.158 134.406 194.828 132.471 195.434 130.547C196.76 126.309 194.403 121.798 190.167 120.47Z" fill="#00587F"/>
                    <path d="M85.1241 183.32C77.9358 182.029 71.0403 179.831 64.5016 176.766C64.4242 176.726 64.355 176.68 64.2737 176.643C62.7329 175.917 61.1946 175.141 59.7036 174.329C59.6985 174.323 59.689 174.319 59.6808 174.316C56.9452 172.809 54.2754 171.142 51.6817 169.316C13.8605 142.674 4.76682 90.2287 31.4108 52.408C37.2045 44.187 44.2157 37.3285 52.0321 31.8925C52.1284 31.8255 52.2247 31.7588 52.3201 31.6913C79.864 12.7128 117.264 11.4338 146.511 30.936L140.23 40.0121C138.484 42.5383 139.558 44.3792 142.615 44.1041L169.901 41.6612C172.962 41.3861 174.793 38.7382 173.969 35.7821L166.642 9.38222C165.822 6.42264 163.722 6.06838 161.974 8.59418L155.677 17.6918C134.214 3.28377 108.471 -2.21021 82.919 2.22057C80.3455 2.66597 77.8081 3.21111 75.3055 3.84568C75.2862 3.84912 75.2707 3.85127 75.2552 3.85471C75.1585 3.87835 75.0605 3.90974 74.9663 3.93596C52.9328 9.59418 33.7088 22.445 19.9912 40.7803C19.8756 40.9175 19.7565 41.0516 19.6473 41.2008C19.1912 41.8152 18.7384 42.4437 18.2952 43.0723C17.5703 44.1023 16.8558 45.1582 16.1722 46.2141C16.0867 46.3414 16.0213 46.4708 15.9465 46.5993C4.62666 64.1406 -0.833353 84.4201 0.103018 105.066C0.105168 105.134 0.101299 105.202 0.103018 105.272C0.193732 107.289 0.353663 109.333 0.570774 111.346C0.582382 111.476 0.611187 111.599 0.633113 111.729C0.857533 113.753 1.13913 115.782 1.4921 117.81C5.07937 138.506 14.8421 157.129 29.471 171.619C29.505 171.653 29.5402 171.69 29.5746 171.725C29.5867 171.739 29.6 171.746 29.6116 171.758C33.542 175.635 37.8171 179.22 42.4203 182.462C54.4667 190.951 67.8807 196.562 82.2866 199.147C86.6576 199.932 90.833 197.022 91.6172 192.654C92.401 188.282 89.4938 184.103 85.1241 183.32Z" fill="#00587F"/>
                    <path d="M95.0663 35.7688C91.4709 35.7688 88.5586 38.6837 88.5586 42.274V107.083L147.832 137.725C148.786 138.218 149.808 138.451 150.813 138.451C153.167 138.451 155.441 137.169 156.597 134.932C158.246 131.74 156.998 127.817 153.805 126.169L101.567 99.1617V42.274C101.566 38.6837 98.6575 35.7688 95.0663 35.7688Z" fill="#00587F"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="200" height="200" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <h1>Ваша заявка была отправлена университету. <span>Ждём ответа</span></h1>

            </div>
        </div>
     );
}
 
export default Status;