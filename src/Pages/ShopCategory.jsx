import React, { useContext } from 'react'
import './Styles/ShopCategory.css'
import { ShopContextCreated } from '../Context/ShopContext'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContextCreated)
  return (
    <div className='shop-category'>
      
      
    </div>
  )
}

export default ShopCategory
