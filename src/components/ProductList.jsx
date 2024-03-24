import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchProducts } from '../redux/actions/productAction';

function ProductListPage() {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.product);
  console.log('products in components:', products)

  useEffect(()=>{
    dispatch(fetchProducts())
  }, [])
  return products.length === 0 ? (<>Loading...</>) : (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: '20px'
    }}>
      {
        products.map((product)=>{
          const {id, image, title, price, description} = product
          return (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid black',
              padding: '10px',
              borderRadius: 10
            }} key={id}>
              <h2>{title}</h2>
              <img style={{
                width: '200px',
                height: '200px',
              }} src={image} alt=''/>
              <p>{description}</p>
              <p>${price}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductListPage