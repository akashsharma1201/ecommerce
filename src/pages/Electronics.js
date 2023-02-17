import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllDataAction } from '../redux/actions/fetchDataAction';
import Productcard from '../components/Productcard';

const Electronics = () => {

  let products = useSelector((state) => state?.fetchDataReducer?.products ?? []);
  // let products = useSelector((state) => state.fetchDataReducer.products[0]);
  
  let dispatch = useDispatch();

  let electronics = products.filter((product) => product.category === "electronics");
  console.log(electronics);

  useEffect(() => {
    dispatch(fetchAllDataAction())
  }, [dispatch])

  return (
    <div className='womenproducts-wrapper px-5'>
      <div className='fluid-container'>

        <div className='row py-5'>
          <div className='col-md-2 '></div>
          <div className='col-md-10'>
            <div className='container-fluid'>
              <div className='row'>
                {/* {
                  electronics.map((product, index) => {
                    let { image, price, rating, title, category ,id } = product
                    return (
                      <Productcard key={index} id={id} image={image} price={price} rating={rating} title={title} category={category} />
                    )
                  })
                } */}

                {
                  electronics.map((product, index) => {
                    // let { image, price, rating, title, category, id } = product
                    return (
                      // <Productcard key={index} id={id} image={image} price={price} rating={rating} title={title} category={category} />
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

export default Electronics