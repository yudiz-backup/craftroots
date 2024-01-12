import PropTypes from 'prop-types'

const IconArrowDown = ({ size, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.52876 5.52861C3.78911 5.26826 4.21122 5.26826 4.47157 5.52861L8.00016 9.0572L11.5288 5.52861C11.7891 5.26826 12.2112 5.26826 12.4716 5.52861C12.7319 5.78896 12.7319 6.21107 12.4716 6.47141L8.47157 10.4714C8.21122 10.7318 7.78911 10.7318 7.52876 10.4714L3.52876 6.47141C3.26841 6.21107 3.26841 5.78896 3.52876 5.52861Z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}

export default IconArrowDown
IconArrowDown.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
IconArrowDown.defaultProps = {
  className: '',
  size: '16',
}
