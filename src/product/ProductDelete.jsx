import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const DeleteProduct = () => {
    const [product, deleteProduct] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const deletePro = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/product_detail/${id}`);
                deleteProduct(res.data);
            } catch (error) {
                console.log(error.message);
            }

        }
        deletePro();
    }, [id])
    const onDelete = async (e) => {
        e.preventDefault()
        try {
            await axios.delete(`http://localhost:5000/product/${id}`);
            alert(`${product.product_name} have been deleted`);
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className="container mt-5">
            <div className="row">
                {product && (
                    <div key={product.product_id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.product_name}</h5>
                                <p className="card-text">Are You Sure?</p>

                                <div className="mt-auto">
                                    <button className="btn btn-danger me-2" onClick={onDelete}>delete</button>
                                    <Link to="/" className="btn btn-secondary me-2">Cancel</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default DeleteProduct;
