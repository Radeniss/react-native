import { Fragment, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";

const Products = [
    {
        id: 1,
        name: "New Car",
        image: "/images/car-1.png",
        price: 1000000,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat minus autem rerum numquam accusamus optio hic qui minima. Nulla nobis excepturi quam earum velit error sit laudantium asperiores sapiente totam.",
    },

    {
        id: 2,
        name: "Old Car",
        image: "/images/car-1.png",
        price: 1000000,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat minus autem rerum numquam accusamus optio hic qui minima. Nulla nobis excepturi quam earum velit error sit laudantium asperiores sapiente totam.",
    },

    {
        id: 3,
        name: "Cash Car",
        image: "/images/car-1.png",
        price: 1000000,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat minus autem rerum numquam accusamus optio hic qui minima. Nulla nobis excepturi quam earum velit error sit laudantium asperiores sapiente totam.",
    }
]

const email = localStorage.getItem("email");

const ProductsPage = () => {
    const[cart, setCart] = useState([
        {
            id: 1,
            qty: 1,
        }
    ]);

    const handleLogout =() => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";}

        const handleAddToCart = (id) => {
           if(cart.find(item => item.id === id )) {
            setCart (
                cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item)
            )
           } else {
            setCart([
                ...cart,
                {
                    id: id,
                    qty: 1
                }
            ])
           }
        }

    return (
   <Fragment>
    <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button className="bg-black ml-5" onClick={handleLogout}>Logout</Button>
    </div>
    <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap gap-2">
            {Products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image} />
                    <CardProduct.Body name={product.name}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer 
                        price={product.price}
                        id={product.id} 
                        handleAddToCart = {handleAddToCart}
                    />
                </CardProduct>
           ))}
        </div>
        <div className="w-2/6">
            <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-5">cart</h1>
            <table className="text-left table-auto border-separate border-spacing-x-5">
                <thead>
                    <tr className="text-center">
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                        const product = Products.find((product) => product.id === item.id);
                        return (
                            <tr key={item.id} className="text-center">
                                <td>{product.name}</td>
                                <td>{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                                <td>{item.qty}</td>
                                <td>{(item.qty * product.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
     <div className="mt-5 flex justify-center mb-5">
            <Counter></Counter>
        </div>
   </Fragment>
);

    
};



export default ProductsPage;