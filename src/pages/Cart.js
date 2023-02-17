import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { deletetocartAction } from "../redux/actions/cartAction";
import "./Cart.css"
import EmptyCart from '../components/EmptyCart';

const Cart = () => {
    let itemList = useSelector((state) => state.cartReducer.cartsList);
    console.log(itemList);
    let dispatch = useDispatch()

    const deleteProduct = (id) => {
        dispatch(deletetocartAction(id))
    }

    let total = 0;

    itemList.map((item) => {total = item.price + total})

    console.log(total);


    return (
        <div className='cartpage-wrapper'>
            <div className='container-fluid px-5'>

                {
                    itemList.length > 0 ? <div className='row py-5'>
                        <div className='col-md-8'>
                            {itemList.map((product, index) => {
                                return (
                                    <div className='d-flex px-4 py-2 my-4 border' key={index}>
                                        <div className='d-flex align-items-center'>
                                            <div className='p-3'><img width={150} alt="image3" src={product.image} /></div>

                                            <div className='product-description col-6'>
                                                <p>{product.description.substring(0, 200)}</p>
                                                <div>
                                                    * <span > 4.3</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='d-flex align-items-center'>
                                            <h5 className='mx-4 text-center'>{product.category}</h5>
                                            <h5 className='mx-4 text-center'>$ {product.price}</h5>

                                            <MdDelete onClick={() => { deleteProduct(product.id) }} className='fs-1 text-danger' style={{ fontSize: 24 }} />
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                        <div className='col-md-3 ms-3'>
                            <div className='billing-card py-5 px-3'>
                                <h2 className=''>ORDER SUMMARY</h2>
                                <div className='d-flex justify-content-between align-items-center py-3'>
                                    <span>Total Product</span>
                                    <span>{itemList.length}</span>
                                </div>
                                <div className='d-flex justify-content-between align-items-center py-3'>
                                    <span>Shipping Price</span>
                                    <span>Rs. 0</span>
                                </div>
                                <div className='d-flex justify-content-between align-items-center py-3'>
                                    <span>Total Price</span>
                                    <span>Rs. {total.toFixed(2)}</span>
                                </div>

                                <button className='w-100 mt-4'>Order Placr</button>
                            </div>
                        </div>
                    </div> : <EmptyCart />
                }

            </div>
        </div>
    )
}

export default Cart;