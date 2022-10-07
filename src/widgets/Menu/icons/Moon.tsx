import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24px" height="24px" viewBox="0 0 25 29" {...props}>
      <path d="M9.7641 2.8526C9.30568 4.98173 9.24334 7.1891 9.58074 9.34484C9.91814 11.5006 10.6485 13.5611 11.7287 15.4053C12.809 17.2494 14.2175 18.8399 15.8711 20.0832C17.5248 21.3264 19.3904 22.1973 21.3581 22.6447C20.3236 23.8091 19.0846 24.7355 17.7146 25.369C16.3447 26.0025 14.8717 26.3301 13.3831 26.3324C13.2451 26.3324 13.1051 26.3379 12.9651 26.3324C10.3735 26.2331 7.89572 25.1493 5.9623 23.2693C4.02887 21.3893 2.76196 18.8319 2.38165 16.0414C2.00134 13.2509 2.53167 10.4036 3.8805 7.99422C5.22934 5.58485 7.31145 3.76562 9.7651 2.8526H9.7641ZM11.2421 0.226562C11.1834 0.226778 11.1248 0.232602 11.0671 0.243968C7.88372 0.860251 5.02245 2.73586 3.0342 5.50967C1.04594 8.28347 0.0712666 11.7594 0.297834 15.2681C0.524401 18.7769 1.93619 22.0704 4.26138 24.5146C6.58658 26.9588 9.66078 28.3809 12.8921 28.507C13.0561 28.5135 13.2201 28.507 13.3821 28.507C15.481 28.5085 17.5494 27.9601 19.4124 26.9083C21.2754 25.8565 22.8781 24.3321 24.0851 22.4641C24.1829 22.3031 24.24 22.1169 24.2506 21.9243C24.2612 21.7317 24.225 21.5394 24.1457 21.3668C24.0663 21.1942 23.9465 21.0474 23.7985 20.9412C23.6504 20.835 23.4792 20.773 23.3021 20.7616C21.3044 20.5709 19.3737 19.883 17.6593 18.7511C15.9449 17.6193 14.4927 16.0737 13.415 14.2339C12.3373 12.3942 11.6629 10.3095 11.4439 8.14096C11.2249 5.97243 11.4672 3.77817 12.1521 1.72777C12.2104 1.56365 12.2317 1.38676 12.2144 1.21184C12.1971 1.03691 12.1416 0.869022 12.0526 0.722146C11.9636 0.57527 11.8436 0.453665 11.7026 0.36746C11.5616 0.281256 11.4037 0.232949 11.2421 0.226562Z" fill="#183B56"/>
    </Svg>
  );
};

export default Icon;