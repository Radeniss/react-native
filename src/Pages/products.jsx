import { Fragment, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const Products = [
    {
        id: 1,
        name: "New Car",
        image: "/images/car-1.png",
        price: "Rp 1.000.000",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat minus autem rerum numquam accusamus optio hic qui minima. Nulla nobis excepturi quam earum velit error sit laudantium asperiores sapiente totam.",
    },

    {
        id: 2,
        name: "New Car",
        image: "/images/car-1.png",
        price: "Rp 1.000.000",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat minus autem rerum numquam accusamus optio hic qui minima. Nulla nobis excepturi quam earum velit error sit laudantium asperiores sapiente totam.",
    },

    {
        id: 3,
        name: "New Car",
        image: "/images/car-1.png",
        price: "Rp 1.000.000",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat minus autem rerum numquam accusamus optio hic qui minima. Nulla nobis excepturi quam earum velit error sit laudantium asperiores sapiente totam.",
    }
]

const email = localStorage.getItem("email");

const ProductsPage = () => {

    const handleLogout =() => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";}

    return (
       <Fragment>  
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
            {email}
        <Button className="bg-black ml-5" onClick={handleLogout}>Logout</Button>
        </div> 
        <div className="flex justify-center py-5">
            <div className="w-3/4 flex flex-wrap gap-5">
                {Products.map((product) => (
                <CardProduct key={product.id}>
                <CardProduct.Header image={product.image}  />
                <CardProduct.Body name={product.title}> 
                    {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} />
        </CardProduct>
         ))}
        </div>
        <div className="w-1/4">
        <h1 className="text-3xl font-bold text-blue-600">
            cart
        </h1>
        </div>
        </div>
       </Fragment>
    );

    
};



export default ProductsPage;