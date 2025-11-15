import axios from "axios";
import React, { useState } from "react";


const AddProduct = () => {
    const [product, setProduct] = useState({
        product_name: "",
        price: "",
        product_discription: ""
    })

    const nameHandler = (e) => {
        setProduct({ ...product, product_name: e.target.value })
    }
    const priceHandler = (e) => {
        setProduct({ ...product, price: e.target.value })
    }
    const discHandler = (e) => {
        setProduct({ ...product, product_discription: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/add_product", product)
            alert(`${product.product_name} is successfuly created`)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <div className="container-sm">
                <div className="row justify-content-center align-items-center">
                    <div className="col-8 col-md-4 col-xl-4">
                        <form action="" onSubmit={submitHandler}>
                            <div>
                                <label htmlFor="">Product Name:</label>
                                <input type="text" className="form-control" value={product.product_name} onChange={nameHandler} />
                            </div>
                            <div>
                                <label htmlFor="">Price:</label>
                                <input type="number" className="form-control" value={product.price} onChange={priceHandler} />
                            </div>
                            <div>
                                <label htmlFor="">Description:</label>
                                <textarea name="discription" id="" cols="30" className="form-control" value={product.product_discription} onChange={discHandler}></textarea>
                            </div>
                            <input type="submit" value="submit" className="btn btn-outline-success my-3 justify-content-center align-items-center" />

                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddProduct;
