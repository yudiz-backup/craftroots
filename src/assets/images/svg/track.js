import PropTypes from 'prop-types'

const IconTrack = ({ className, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.25229 9.91928C3.62736 9.54421 4.13607 9.3335 4.6665 9.3335C5.19694 9.3335 5.70564 9.54421 6.08072 9.91928C6.45579 10.2944 6.6665 10.8031 6.6665 11.3335C6.6665 11.8639 6.45579 12.3726 6.08072 12.7477C5.70564 13.1228 5.19694 13.3335 4.6665 13.3335C4.13607 13.3335 3.62736 13.1228 3.25229 12.7477C2.87722 12.3726 2.6665 11.8639 2.6665 11.3335C2.6665 10.8031 2.87722 10.2944 3.25229 9.91928ZM4.6665 10.6668C4.48969 10.6668 4.32012 10.7371 4.1951 10.8621C4.07007 10.9871 3.99984 11.1567 3.99984 11.3335C3.99984 11.5103 4.07007 11.6799 4.1951 11.8049C4.32012 11.9299 4.48969 12.0002 4.6665 12.0002C4.84331 12.0002 5.01288 11.9299 5.13791 11.8049C5.26293 11.6799 5.33317 11.5103 5.33317 11.3335C5.33317 11.1567 5.26293 10.9871 5.13791 10.8621C5.01288 10.7371 4.84331 10.6668 4.6665 10.6668Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.91928 9.91928C10.2944 9.54421 10.8031 9.3335 11.3335 9.3335C11.8639 9.3335 12.3726 9.54421 12.7477 9.91928C13.1228 10.2944 13.3335 10.8031 13.3335 11.3335C13.3335 11.8639 13.1228 12.3726 12.7477 12.7477C12.3726 13.1228 11.8639 13.3335 11.3335 13.3335C10.8031 13.3335 10.2944 13.1228 9.91928 12.7477C9.54421 12.3726 9.3335 11.8639 9.3335 11.3335C9.3335 10.8031 9.54421 10.2944 9.91928 9.91928ZM11.3335 10.6668C11.1567 10.6668 10.9871 10.7371 10.8621 10.8621C10.7371 10.9871 10.6668 11.1567 10.6668 11.3335C10.6668 11.5103 10.7371 11.6799 10.8621 11.8049C10.9871 11.9299 11.1567 12.0002 11.3335 12.0002C11.5103 12.0002 11.6799 11.9299 11.8049 11.8049C11.9299 11.6799 12.0002 11.5103 12.0002 11.3335C12.0002 11.1567 11.9299 10.9871 11.8049 10.8621C11.6799 10.7371 11.5103 10.6668 11.3335 10.6668Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.666504 3.33317C0.666504 2.96498 0.964981 2.6665 1.33317 2.6665H8.6665C9.03469 2.6665 9.33317 2.96498 9.33317 3.33317H11.9998C12.234 3.33317 12.451 3.45604 12.5715 3.65684L14.5715 6.99017C14.6337 7.09378 14.6665 7.21234 14.6665 7.33317V11.3332C14.6665 11.7014 14.368 11.9998 13.9998 11.9998H12.6665C12.2983 11.9998 11.9998 11.7014 11.9998 11.3332C11.9998 10.965 12.2983 10.6665 12.6665 10.6665H13.3332V7.99984H9.33317V10.6665H9.99984C10.368 10.6665 10.6665 10.965 10.6665 11.3332C10.6665 11.7014 10.368 11.9998 9.99984 11.9998H5.99984C5.63165 11.9998 5.33317 11.7014 5.33317 11.3332C5.33317 10.965 5.63165 10.6665 5.99984 10.6665H7.99984V3.99984H1.33317C0.964981 3.99984 0.666504 3.70136 0.666504 3.33317ZM9.33317 4.6665V6.6665H12.8224L11.6224 4.6665H9.33317ZM1.99984 7.99984C2.36803 7.99984 2.6665 8.29831 2.6665 8.6665V10.6665H3.33317C3.70136 10.6665 3.99984 10.965 3.99984 11.3332C3.99984 11.7014 3.70136 11.9998 3.33317 11.9998H1.99984C1.63165 11.9998 1.33317 11.7014 1.33317 11.3332V8.6665C1.33317 8.29831 1.63165 7.99984 1.99984 7.99984Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.3335 6.00016C1.3335 5.63197 1.63197 5.3335 2.00016 5.3335H4.66683C5.03502 5.3335 5.3335 5.63197 5.3335 6.00016C5.3335 6.36835 5.03502 6.66683 4.66683 6.66683H2.00016C1.63197 6.66683 1.3335 6.36835 1.3335 6.00016Z"
      />
    </svg>
  )
}
IconTrack.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
IconTrack.defaultProps = {
  className: '',
  size: '16',
}
export default IconTrack