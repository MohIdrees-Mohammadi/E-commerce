import React from 'react'

const Feature = ({products}) => {
  return (
    <div className="border grid grid-cols-1 md:grid-cols-3 gap-5">
          {
          products.map((product) => (
            <div className="bg-amber-200" key={product.Id}>
              <img className="w-10" src={product.imageUrl} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <button className="mt-2 bg-red-500 text-white py-1 px-4 rounded">Add to Cart</button>
            </div>
          ))
        }
        </div>
  )
}

export default Feature