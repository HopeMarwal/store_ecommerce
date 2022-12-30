import React from 'react';
import { useParams } from 'react-router-dom'

export default function ProductItem() {
  let { productSlug, category } = useParams()
  return (
    <div>ProductItem {productSlug} </div>
  )
}
