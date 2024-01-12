import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import NextImage from '../generic/NextImage'
import { BRAND_NAME } from '@/helper/constant'

function Logo({ className, imageClass }) {
  const storeConfigState = useSelector((state) => state.storeReducer)
  const storeConfigData = storeConfigState?.data?.storeConfig
  return (
    <Link href="/" className={className}>
      {storeConfigData && (
        <NextImage
          src={`${storeConfigData?.base_media_url}logo/${storeConfigData?.header_logo_src}`}
          alt={BRAND_NAME + ' Logo'}
          width={0}
          height={0}
          loading="eager"
          className={`brand-logo ${imageClass}`}
          sizes="198px"
        />
      )}
    </Link>
  )
}

Logo.propTypes = {
  className: PropTypes.string,
  imageClass: PropTypes.string,
}
Logo.defaultProps = {
  className: '',
  imageClass: '',
}
export default Logo
