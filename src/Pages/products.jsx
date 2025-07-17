import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const Products = [
    {
        id: 1,
        name: "New Car",
        image: "/images/car-1.png",
        price: "Rp 1.000.000",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat minus autem rerum numquam accusamus optio hic qui minima. Nulla nobis excepturi quam earum velit error sit laudantium asperiores sapiente totam.",
    }
]

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
        
       {Products.map((product) => (
        <CardProduct key={product.id}>
            <CardProduct.Header image={product.image}  />
            <CardProduct.Body name={product.title}>
                 {product.body}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
        </CardProduct>
       ))}
        </div>
    );
};

export default ProductsPage;