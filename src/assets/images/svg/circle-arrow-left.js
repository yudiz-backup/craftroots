import PropTypes from 'prop-types'

const IconCircleArrowLeft = ({ className, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.0404 30.2034L13.0302 30.1977L13.0197 30.1925C12.9063 30.1358 12.7897 30.0733 12.6691 30.0087C12.0935 29.7001 11.4278 29.3433 10.5934 29.3433C10.2832 29.3433 9.97782 29.3681 9.69522 29.391L9.68608 29.3918C9.39421 29.4155 9.12581 29.437 8.85933 29.437C8.32495 29.437 7.94887 29.2982 7.66376 29.0729C7.37271 28.8429 7.13418 28.4892 6.93976 27.9875L6.93936 27.9863C6.84804 27.7124 6.74481 27.4028 6.58823 27.0897L6.57295 27.0592L6.55365 27.031C5.89197 26.0642 4.98363 25.364 4.05322 24.6664C3.21417 24.021 2.65986 23.5148 2.31376 22.932C1.97825 22.3671 1.81271 21.6839 1.86003 20.6384C1.86372 20.5685 1.86788 20.4973 1.87212 20.4248C1.91925 19.6194 1.97518 18.6636 1.47712 17.7146C1.28076 17.3271 0.879492 17.0971 0.646832 16.9808C0.62767 16.9713 0.610577 16.9626 0.595222 16.9547V16.8941L0.578328 16.8307C0.426388 16.2612 0.503527 15.6684 0.741298 15.0093C0.98214 14.3418 1.36914 13.6539 1.79638 12.8946L1.80236 12.884L1.80781 12.8731C1.89515 12.6985 1.99445 12.5218 2.10101 12.3324L2.10391 12.3273C2.20741 12.1433 2.31787 11.947 2.41708 11.7487L2.44164 11.6996L2.45496 11.6463C2.61802 10.9943 2.56135 10.258 2.51594 9.66804L2.51529 9.65953L2.51452 9.64947L2.51334 9.63945C2.41947 8.84184 2.40305 8.26297 2.76081 7.72652L2.78244 7.69409L2.79878 7.6587C2.96404 7.30076 3.21294 7.2058 3.78785 6.98644C3.82999 6.97036 3.87388 6.95361 3.91962 6.93605L3.92113 6.93555C4.19513 6.84425 4.50486 6.74107 4.81798 6.58456L4.84853 6.56929L4.87671 6.55001C5.84378 5.88858 6.54432 4.98057 7.24217 4.05049C7.70269 3.45207 8.19087 2.83216 8.71641 2.3023C9.29123 1.89245 9.86379 1.81179 10.4059 1.81179C10.6887 1.81179 10.9371 1.8124 11.2257 1.85362L11.2609 1.85864H11.2964C11.4142 1.85864 11.5466 1.86855 11.7033 1.88059L11.7126 1.88131C11.8584 1.89253 12.0269 1.90549 12.1869 1.90549C12.9043 1.90549 13.5377 1.81397 14.1336 1.5086C14.2828 1.46836 14.3914 1.38262 14.4486 1.33227C14.5404 1.25146 14.6171 1.15549 14.6751 1.0746C14.7928 0.910249 14.8876 0.73122 14.9305 0.64532C14.939 0.628432 14.9684 0.582717 15.1157 0.545161C15.2657 0.506937 15.4517 0.5 15.655 0.5C16.1456 0.5 16.6841 0.648327 17.2646 0.893869C17.8443 1.13902 18.4297 1.46476 19.0195 1.79493L19.0298 1.80065L19.0402 1.80589C19.1317 1.85159 19.2221 1.89831 19.3124 1.94497C19.9109 2.25418 20.5055 2.56139 21.3728 2.56139C21.5327 2.56139 21.7012 2.54843 21.847 2.53721L21.8563 2.53649C22.013 2.52444 22.1454 2.51454 22.2633 2.51454H22.3046L22.3454 2.50774C23.0282 2.39398 23.7431 2.45111 24.2479 2.76653L24.2747 2.78326L24.3034 2.79649C24.6615 2.96171 24.7565 3.21047 24.9759 3.78507C24.992 3.82722 25.0087 3.87112 25.0263 3.91687L25.0268 3.91837C25.1181 4.19228 25.2214 4.50191 25.378 4.81494L25.3932 4.84549L25.4125 4.87368C26.0742 5.84043 26.9826 6.54072 27.913 7.23832C28.5111 7.69821 29.1306 8.18571 29.6603 8.71046C30.1176 9.36587 30.0625 10.0093 29.9685 10.9495C29.8265 11.9451 29.7045 13.1041 30.5762 14.3022L30.5993 14.3339L30.627 14.3617L30.7676 14.5022L30.9082 14.6428L30.9175 14.6521L30.9273 14.6609L30.9301 14.6634C31.1858 14.8934 31.3449 15.0366 31.4337 15.2178C31.5029 15.359 31.5519 15.5776 31.4011 15.9922L31.401 15.9922L31.3983 16.0001C31.2159 16.5287 30.9982 17.0217 30.7709 17.5109C30.7137 17.634 30.6554 17.7579 30.5968 17.8824C30.426 18.2452 30.253 18.6129 30.0981 18.9809C29.6753 19.9853 29.3562 21.061 29.4507 22.3829L29.4515 22.3944L29.4528 22.4058C29.5402 23.1482 29.4759 23.7008 29.2681 24.1166C29.0684 24.516 28.7034 24.8546 28.0462 25.1093L28.0451 25.1096C27.7711 25.2009 27.4613 25.3041 27.1482 25.4606L27.1177 25.4759L27.0895 25.4952C26.1224 26.1566 25.4219 27.0646 24.724 27.9947C24.2635 28.5931 23.7753 29.2131 23.2498 29.7429C22.675 30.1528 22.1024 30.2334 21.5602 30.2334C21.2775 30.2334 21.0291 30.2328 20.7405 30.1916C20.3771 30.1397 20.0661 30.1397 19.7888 30.1397H19.7793C19.0351 30.1397 18.3812 30.2382 17.766 30.5717C17.3806 30.7686 17.1516 31.168 17.0357 31.3999C17.0164 31.4384 17.0014 31.4498 16.9957 31.4539C16.9876 31.4597 16.9682 31.471 16.9227 31.4809C16.8743 31.4913 16.8099 31.4975 16.7181 31.4993C16.6579 31.5006 16.6046 31.5 16.5437 31.4993C16.5024 31.4988 16.4577 31.4984 16.4049 31.4984C15.9143 31.4984 15.3759 31.35 14.7953 31.1045C14.2156 30.8593 13.6302 30.5336 13.0404 30.2034Z"
        stroke="currentColor"
      />
      <path
        d="M9 16H23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 16L13 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 16L13 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
IconCircleArrowLeft.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
IconCircleArrowLeft.defaultProps = {
  className: '',
  size: '32',
}
export default IconCircleArrowLeft