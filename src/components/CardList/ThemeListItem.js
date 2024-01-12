import React from 'react'
import PropTypes from 'prop-types'

const ThemeListItem = ({ title }) => {
  return (
    <div className="mb-2 sm:mb-4 last:mb-0 flex items-start gap-2 xs:gap-3">
      <span className="mt-[7px]">
        <svg
          width="15"
          height="5"
          viewBox="0 0 15 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.37273 -3.11543e-07C9.15455 -2.33657e-07 10.9364 0.271084 12.7182 0.542169C13.4818 0.542169 14.2455 0.813253 14.5 1.89759C14.2455 2.71084 13.7364 3.5241 12.9727 3.79518C9.66364 4.87952 6.1 5.42169 2.53636 4.60843C1.51818 4.33735 0.5 3.5241 0.5 2.16867C0.5 0.813252 1.51818 0.271084 2.79091 0.271084C4.31818 -4.45061e-07 5.84546 0.271084 7.37273 -3.11543e-07Z"
            fill="#C8AA5D"
          />
        </svg>
      </span>
      <div
        className="text-grey-800 text-sm xs:text-base shippng-policy"
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      ></div>
    </div>
  )
}

export default ThemeListItem

ThemeListItem.propTypes = {
  title: PropTypes.string,
}
