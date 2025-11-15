import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [])
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get("http://localhost:5000/product");

                setProduct(res.data);
            }
            catch (error) {
                console.log(error.message)
            }
        }
        fetchProduct();
    }, [])


    if (loading)
        return (
            <div className="dot-loader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    return (
        <div>
            <div className="container mt-5">
                <h2 className="mb-4">Product Table</h2>
                <table className="table table-striped table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((product) => (<tr key={product.id}>
                                <td>{product.product_id}</td>
                                <td>{product.product_name}</td>
                                <td>${product.price}</td>
                                <td>
                                    <Link className="btn btn-primary" to={`product_detail/${product.product_id}`} >Detail</Link>
                                    <Link className="btn btn-success" to={`product_Edit/${product.product_id}`} >Edit</Link>
                                    <Link className="btn btn-danger" to={`product_delete/${product.product_id}`}>Delete</Link>

                                </td>
                            </tr>))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )

}
export default ProductList;