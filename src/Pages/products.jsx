import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
        <CardProduct>
            <CardProduct.Body title="New Car">
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat minus autem rerum numquam accusamus optio hic qui minima. Nulla nobis excepturi quam earum velit error sit laudantium asperiores sapiente totam.
            </CardProduct.Body>
            <CardProduct.Header />
            <CardProduct.Footer />
        </CardProduct>
        </div>

    );
};

export default ProductsPage;