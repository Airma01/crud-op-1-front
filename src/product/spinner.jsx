import React, { useState, useEffect } from "react";
import "./load.css";
const Spinner = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [])
    
    return (
        <div>
            <div className="container-spin">
                {
                    (<div className="loader"></div>

                    )
                }
            </div>
        </div>
    )
}
export default Spinner;