import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../component/Breadcrums/Breadcrum';
import Productdisplay from '../component/Productdisplay/Productdisplay';
import Descriptionbox from '../component/Descriptionbox/Descriptionbox';
import Relatedproducts from '../component/Relatedproducts/Relatedproducts';
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId}=useParams();
  const product = all_product.find((e)=>e.id=== Number(productId))
  return (
    <div>
      <Breadcrum product = {product}/>
      <Productdisplay product={product}/>
      <Descriptionbox/>
      <Relatedproducts/>
    </div>
  )
}

export default Product
