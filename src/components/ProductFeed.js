import React from 'react'
import Product from './Product'

function ProductFeed({ products }) {
  return (
    <div>
      {products.map(({ id, title, price, description, category, image }) => (
        <div key={id}>
          <Product
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        </div>
      ))}
    </div>
  )
}

export default ProductFeed