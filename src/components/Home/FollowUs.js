import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'
import { Swiper, SwiperSlide } from 'swiper/react' // Import swiper components
import Link from 'next/link'
import Heading from '../generic/Heading'
import NextImage from '../generic/NextImage'
import {
  IconCircleArrowLeft,
  IconCircleArrowRight,
  InstagramIcon,
  InstagramReelIcon,
  MultiplePostIcon,
  iconInstagram,
} from '@/assets/images'
import { INSTAGRAM_MEDIA_TYPES } from '@/helper/constant'

function RenderArrows({ sliderRef }) {
  return (
    <div className="slider-arrow flex gap-2">
      <button
        className="text-grey-600"
        onClick={() => sliderRef.current.swiper.slidePrev()}
      >
        <IconCircleArrowLeft className="w-7 sm:w-8" />
      </button>
      <button
        className="text-grey-600"
        onClick={() => sliderRef.current.swiper.slideNext()}
      >
        <IconCircleArrowRight className="w-7 sm:w-8" />
      </button>
    </div>
  )
}

RenderArrows.propTypes = {
  sliderRef: PropTypes.shape({
    current: PropTypes.shape({
      swiper: PropTypes.shape({
        slideNext: PropTypes.func,
        slidePrev: PropTypes.func,
      }),
    }),
  }),
}
function FollowUs({ instagramPosts }) {
  const intl = useIntl()
  const sliderRef = useRef(null)

  return (
    instagramPosts?.length > 0 && (
      <section className="pt-6 sm:pt-12 sm:px-0 px-3 pb-3 sm:pb-0 bg-grey-100 follow-us">
        <div className="px-0 sm:px-4 container">
          <div className="flex justify-between items-center mb-4 md:mb-10">
            <Heading
              title={intl.formatMessage({ id: 'page.home.followUs.title' })}
              icon={iconInstagram}
              className="!mb-0"
            />
            <div className="hidden sm:block">
              <RenderArrows sliderRef={sliderRef} />
            </div>
          </div>
        </div>
        <div>
          <Swiper
            loop={true}
            slidesPerGroup={1}
            slidesPerView={2}
            breakpoints={{
              1536: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 4,
              },
              480: {
                slidesPerView: 3,
              },
            }}
            ref={sliderRef}
          >
            {instagramPosts.map((item) => (
              <SwiperSlide key={item?.id} className="group h-full">
                <div className="relative overflow-hidden h-full">
                  <Link href={item.permalink} target="__blank">
                    <div className="relative h-[280px] sm:h-[280px] xl:h-[360px]">
                      <NextImage
                        src={
                          item.thumbnail_url
                            ? item.thumbnail_url
                            : item.media_url
                        }
                        alt="FollowUs"
                        className="object-cover object-center"
                        priority={true}
                        fill
                        quality={100}
                        sizes="max-width(768px) 33vw, 25vw"
                      />
                    </div>
                    <div className="overlay">
                      <div className="flex items-center gap-4 sm:gap-6 md:gap-8 font-jost font-semibold text-white">
                        <div>
                          <span className="sm:mb-2 md:mb-3 flex-center">
                            {item?.media_type.toLowerCase() ===
                              INSTAGRAM_MEDIA_TYPES.video && (
                              <InstagramReelIcon />
                            )}
                            {item?.media_type.toLowerCase() ===
                              INSTAGRAM_MEDIA_TYPES.carousel_album && (
                              <MultiplePostIcon />
                            )}
                            {item?.media_type.toLowerCase() ===
                              INSTAGRAM_MEDIA_TYPES.image && (
                              <InstagramIcon className="w-10" size="42" />
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="block sm:hidden my-2">
            <RenderArrows sliderRef={sliderRef} />
          </div>
        </div>
      </section>
    )
  )
}

FollowUs.propTypes = {
  instagramPosts: PropTypes.array,
}

export default FollowUs
