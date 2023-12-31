import { useEffect, useState } from "react";
import axios from 'axios';
import cartWhite from './assets/img/cartWhite.svg'
import rating from './assets/img/rating.svg';
import arrow from './assets/img/arrowBack.svg';
import { useParams, Link } from "react-router-dom";
import { Reviews } from "./Reviews";


export const Product = () => {

    const [product, setProduct] = useState(null);
    const params = useParams();
    console.log(params.productId);

    useEffect(() => {
        axios.get(`https://masterclass.kimitsu.it-incubator.ru/api/products/${params.productId}`)
        .then((res) => setProduct(res.data))
        }, [params.productId])

        if(product === null) {
            return <h2>Page is loading...</h2>
        }

        return (
            <div>
                <div className="arrowBack">
                    <Link to={"/"}>
                        <img src={arrow} alt="" />
                        Back to Best Seller
                    </Link>
                </div>

                <div className="product">
                    <img src={product.image} alt="" />
                    <div className="info">
                        <p className="title">{product.title}</p>
                        <p className="price">$ {product.price}</p>
                        <div className="rating">
                            <p>Rating: {product.rating.rate}</p>
                            <img src={rating} alt="" />
                        </div>
                        <div className="category">
                            <span>Category:</span>
                            <p>{product.category}</p>
                        </div>
                        <p className="description">{product.description}</p>
                        <button>
                            <img src={cartWhite} alt="" />
                            Add to cart
                        </button>
                    </div>
                </div>
                <Reviews />
            </div>
        )

}
