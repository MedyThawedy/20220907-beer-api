import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from '../../navigation/Navigation.jsx';
import './AllProducts.css';

const AllProducts = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (<>
        <Navigation />
        {product.map((item) => {

            return (
                <Link key={item._id} to={`/allproducts/${item._id}`} className="products">
                    <img className="imgProducts" src={item.image_url} alt={item.name} />
                    <div className="rightDivProductDetails">
                        <h2 className="clsItemName">{item.name}</h2>
                        <h3 className="clsTagLine">{item.tagline}</h3>
                        <p className="clsCreatedBy">Created by: {item.name}</p>
                        <button className="clsDetailsButton">Details</button></div>
                    <hr />
                </Link>)
        }
        )
        }
        <Navigation />
    </>);
}
export default AllProducts;