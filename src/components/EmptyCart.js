import React from 'react';
import "./EmptyCart.css";
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {

    let nevigate = useNavigate()


    const geToHome = () =>{
        nevigate("/")
    }
    return (
        <>
            <div classNameName="card">
                <div className="card-body cart">
                    <div className="col-sm-12 empty-cart-cls text-center">
                        <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" className="img-fluid mb-4 mr-3" alt="image1" />
                        <h3><strong>Your Cart is Empty</strong></h3>
                        <h4>Add something to make me happy :)</h4>
                        <button className="btn btn-primary cart-btn-transform m-3" data-abc="true" onClick={geToHome}>continue shopping</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmptyCart