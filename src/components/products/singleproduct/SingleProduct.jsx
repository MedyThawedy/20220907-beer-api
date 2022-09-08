import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../navigation/Navigation";
import Back from "../../back/Back";
import './SingleProduct.css';


const SingleProduct = () => {

    const params = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        console.log('1 . ', params);
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.productid}`)
            .then(res => res.json())
            .then(data => setProduct(data))
        console.log('2 . ', product)
    }, []);
    return (<><div className="clsSingleProduct">
        <div className="clsProductDetails">
            <img src={product.image_url} alt={product.name} />
            <div className="clsDiv2">
                <h2 className="clsHeaderSingleProduct">{product.name}</h2>
                <p className="clsTagLine">{product.tagline}</p>
                <div className="clsDivGrey">
                    <p className="clsGrey">First brewed: </p> <p className="clsGrey">{product.first_brewed}</p></div>
                <div className="clsDivGrey">
                    <p className="clsGrey">Attenuation level:</p> <p className="clsGrey">{product.attenuation_level}</p>
                </div>
                <p>{product.description} </p></div>
        </div>
        {console.log('3 . ', product)}

    </div><Back />
        <Navigation />
    </>);

}


export default SingleProduct;