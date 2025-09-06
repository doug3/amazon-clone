import React, { useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'

function Product({ id, title, price, description, category, image }) {
    const formattedPrice = price.toFixed(2);
    const [rating] = useState(
        Math.floor(Math.random() * 5) + 1
    );

    const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 my-3 bg-gray-100 text-gray-500 text-xs italic p-1 rounded">{category}</p>
      <Image src={image} alt={title} width={200} height={200} objectFit='contain'/>
      <h4>{title}</h4>
      <div className='flex items-center'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className='h-5 text-yellow-500' />
          ))}
      </div>
      {hasPrime && (
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Amazon_Prime_logo_%282024%29.svg" className="h-7" alt="Prime" />
          <p className='text-xs text-gray-500'>FREE Two-day Delivery</p>
        </div>
      )}
      <p className='text-xs my-2'>{description}</p>
      
      <p>${formattedPrice}</p>

      <button className='mt-auto button'>Add to Basket</button>
    </div>
  )
}

export default Product