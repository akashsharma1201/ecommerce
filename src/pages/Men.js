import React from 'react'
import { useEffect } from 'react'
import Productcard from '../components/Productcard'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllDataAction } from '../redux/actions/fetchDataAction'
import { useParams } from 'react-router-dom'



const Men = () => {


  let { productcategory } = useParams();
  console.log(productcategory);

  let products = useSelector((state) => state.fetchDataReducer.products);
  // let products = useSelector((state) => state.fetchDataReducer.products[0]);
  let dispatch = useDispatch();

  let menProducts = products.filter((product) => product.category === "men's clothing");
  console.log(menProducts);

  // console.log(products);
  useEffect(() => {
    dispatch(fetchAllDataAction())
  }, [dispatch])
  return (
    <div className='menproducts-wrapper px-5'>
      <div className='fluid-container'>
        <div className='row py-5'>
          <div className='col-md-2'></div>
          <div className='col-md-10'>
            <div className='container-fluid'>
              <div className='row'>
                {/* {
                  .map((product, index) => {
                    let { image, price, rating, title, category, id } = product
                    return (
                      <Productcard key={index} id={id} image={image} price={price} rating={rating} title={title} category={category} />
                    )
                  })
                } */}

                {
                  menProducts.map((product, index) => {
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

export default Men