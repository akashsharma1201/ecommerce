import React from 'react'
import { Link } from 'react-router-dom'

import "./ProductCard.css"

const Productcard = ({ product }) => {
    // { image, price, rating, title, category, id }
    return (
        <div className='col-md-4 mt-4' >
            <Link to={`/product/${product.id}`}>
                <div className='prodcut-card h-100'>
                    <div className='image-box'><img alt='image2' className='img-fluid' src={product.image} /></div>
                    <div className='prodcut-card-body'>
                        <div className='content px-2'>
                            <p className='title'>{product.title.substring(0, 35)}</p>
                            <p className='category'>{product.category}</p>
                            <div className='d-flex'>
                                <div className='rating'>★ <span>{product.rating.rate}</span></div>
                                <div className='reviews ms-5'> Reviews : ({product.rating.count})</div>
                            </div>
                            <h4 className='price'>$ <span>{product.price}</span></h4>
                        </div>
                    </div>
                </div>
            </Link>


            
        </div>
    )
}

export default Productcard