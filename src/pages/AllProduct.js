import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Productcard from '../components/Productcard';
import { fetchAllDataAction } from '../redux/actions/fetchDataAction';
import "./AllProducts.css";

const AllProduct = () => {


    let products = useSelector((state) => state.fetchDataReducer.products);

    console.log(products);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllDataAction())
    
    }, [dispatch])
    return (
        <div className='allproducts=wrapper px-5'>
            <div className='fluid-container'>
                <div className='row py-5'>
                    <div className='col-md-2'></div>
                    <div className='col-md-10'>
                        <div className='fluid-container'>
                            <div className='row'>
                                {
                                    products.map((product, index) => {
                                        return (
                                            <Productcard key={index} product={product} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProduct