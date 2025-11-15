import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [])
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const productDetail = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/product_detail/${id}`);
                setProduct(res.data)
            }
            catch (error) {
                console.log(error.message);
            }
        }
        productDetail();
    }, [id])


    return (
        <div className="container mt-5">
            <div className="row">
                {product && (
                    <div key={product.product_id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.product_name}</h5>
                                <p className="card-text">{product.product_discription}</p>
                                <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                                <div className="mt-auto">
                                    <button className="btn btn-primary me-2">Buy Now</button>
                                    <button className="btn btn-secondary">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}
export default ProductDetail;