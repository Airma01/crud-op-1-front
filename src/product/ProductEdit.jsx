import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const EditPro = () => {
    const { id } = useParams();
    const [product, editProduct] = useState({
        product_name: "",
        price: "",
        product_discription: ""
    })
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/product_detail/${id}`)
                editProduct(res.data);
            }
            catch (error) {
                console.log(error.message);
            }
        }
        getProduct();
    }, [id])
    const prevProduct = product.product_name;

    const nameHandler = (e) => {
        editProduct({ ...product, product_name: e.target.value })
    }
    const priceHandler = (e) => {
        editProduct({ ...product, price: e.target.value })
    }
    const discriptionHandler = (e) => {
        editProduct({ ...product, product_discription: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/product_edit/${id}`, product);
            alert(`${prevProduct} is updated to ${product.product_name}`)
        }
        catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div>
            <h1>edit</h1>
            <div className="container-sm">
                <div className="row justify-content-center align-items-center">
                    <div className="col-8 col-xl-5">

                        <form action="" onSubmit={onSubmit}>
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
                                <textarea name="discription" id="" cols="30" className="form-control" value={product.product_discription} onChange={discriptionHandler}></textarea>
                            </div>
                            <input type="submit" value="submit" className="btn btn-outline-success my-3 justify-content-center align-items-center" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPro;