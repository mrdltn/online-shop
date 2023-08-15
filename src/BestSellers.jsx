import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const BestSellers = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    // const navigateToProductHandler = (id) => {
    //     navigate(`/product/${id}`);
    // }

    useEffect(() => {
        axios.get('https://masterclass.kimitsu.it-incubator.ru/api/products')
        .then((res) => {
            console.log(res.data);
            setProducts(res.data)
        })
    }, []);

    const finalProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div>
            <input type="text" placeholder="Search a Product on title" value={search} onChange={(e) => {setSearch(e.currentTarget.value)}} />
            <div className="cards">
                {finalProducts.map((product) => (
                    <div className="card" key={product.id}>
                    <img src={product.image} alt="img" />
                    <h4>{product.title}</h4>
                    <p className="price">${product.price}</p>
                    <button onClick={() => navigate(`./product/${product.id}`)}>Show more</button>
                </div>
                ))}
            </div>
        </div>
    )
}