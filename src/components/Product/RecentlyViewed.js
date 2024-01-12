import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import { Heading, SkeletonProductItem } from '../generic'
import {
  imgProduct1,
  imgProduct2,
  imgProduct3,
  imgProduct4,
  imgProduct5,
  imgProduct6,
  imgProduct7,
  imgProduct8,
} from '@/assets/images'
const ProductListItem = dynamic(() => import('../generic/ProductListItem'), {
  loading: () => <SkeletonProductItem />,
  ssr: false,
})
function RecentlyViewed({ intl }) {
  const products = [
    {
      id: 1,
      title: 'Bhadohi Basket Craft - Utility Basket With Handle',
      img: imgProduct1,
      price: '1,010.00',
    },
    {
      id: 2,
      title: 'White Cotton Printed Slim Fit Long Kurta',
      img: imgProduct2,
      price: '1,010.00',
      radio: true,
    },
    {
      id: 3,
      title: 'Ceramic luxury set of 4 with spoons.',
      img: imgProduct3,
      price: '1,010.00',
      radio: false,
    },
    {
      id: 4,
      title: 'Hand Made Craft Purse for women',
      img: imgProduct4,
      price: '1,010.00',
    },
    {
      id: 5,
      title: 'Handcrafted Wood & Dhokra Coaster Set (Set of 6)',
      img: imgProduct5,
      price: '1,010.00',
    },
    {
      id: 6,
      title: 'Smart Craft Mitti Pots with different sizes.',
      img: imgProduct6,
      price: '1,010.00',
    },
    {
      id: 7,
      title: 'Japanese Style Ceramic Bowl',
      img: imgProduct7,
      price: '1,010.00',
    },
    {
      id: 8,
      title: 'Smart Craft Mitti Pots with different sizes.',
      img: imgProduct8,
      price: '1,010.00',
    },
  ]
  return (
    <>
      <Heading
        title={intl.formatMessage({
          id: 'page.productDetails.recentlyViewedProducts',
        })}
      />{' '}
      <div className="horizontal-slider grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-3 md:gap-x-4 lg:gap-x-6 gap-y-8 md:gap-y-12">
        {products.slice(0, 4).map((item, i) => (
          <ProductListItem key={i} {...item} />
        ))}
      </div>
    </>
  )
}

export default RecentlyViewed
RecentlyViewed.propTypes = {
  intl: PropTypes.object.isRequired,
}
