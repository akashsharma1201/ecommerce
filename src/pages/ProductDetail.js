import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../redux/actions/fetchDataAction';
import "./ProuctDetail.css";
import { useParams } from 'react-router-dom';
import { addtocartAction } from '../redux/actions/cartAction';

export const ProductDetail = () => {

  let product = useSelector((state) =>state.fetchDataReducer.productDetail[0]);
  let  {id} = useParams();
  // console.log(id);
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchSingleProduct(id))
  }, [id])

  const addCart = (item) =>{
    console.log("addcart");
    dispatch(addtocartAction(item))
  }
  return (
    <div className='productdetail-wrapper'>
      <div className='container-fluid'>
        <div className='row py-5'>
          <div className='col-md-6'>
            <div className='image-box'><img src={product?.image} alt="image8" /></div>
          </div>
          <div className='col-md-6'>
            <div className='product-detail-box'>
              <h1 className='title'>{product?.title}</h1>
              <div className='product-price'>
                <h3> $ <span>{product?.price}</span></h3>
                <span>INCL. OF TAXES AND DUTIES</span>
              </div>
              <div className='order-btn py-3'>
                <button className='add-to-cart-btn' onClick={()=>{addCart(product)}}>ADD TO CART</button>
                <button className='buy-now-btn'>BUY NOW</button>
              </div>
              <div className='description py-3'>
                <h3>Description</h3>
                <ul>
                  <li>Category : <span>{product?.category}</span></li>
                  <li>Rating :<span>{product?.rating.rate}</span></li>
                  <li>Counte :<span>{product?.rating.count}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
