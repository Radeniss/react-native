import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
        <CardProduct>
            <CardProduct.Header image="/images/car-1.png"  />
            <CardProduct.Body title="New Car">
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat minus autem rerum numquam accusamus optio hic qui minima. Nulla nobis excepturi quam earum velit error sit laudantium asperiores sapiente totam.
            </CardProduct.Body>
            <CardProduct.Footer price = "Rp 1.000.000"/>
        </CardProduct>
        <CardProduct>
            <CardProduct.Header image="/images/car-1.png"  />
            <CardProduct.Body title="New Car">
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat minus autem rerum numquam accusamus optio hic qui minima. Nulla nobis excepturi quam earum velit error sit laudantium asperiores sapiente totam.
            </CardProduct.Body>
            <CardProduct.Footer price = "Rp 1.000.000"/>
        </CardProduct>
        </div>

    );
};

export default ProductsPage;