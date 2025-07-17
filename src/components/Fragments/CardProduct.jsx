const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="w-full max-w-sm bg-gray-600 border border-gray-700 rounded-lg shadow">
            {children}
        </div>
    )
}

const Header = () => {
    return (
        <a href="">
            <img 
                src="/images/car-1.png" 
                alt="product" 
                className="p-8 rounded-t-lg "/>
        </a> 
    )
}

const Body = () => {
    return (
        <div 
            className="px-5 pb-5">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">New Car</h5>
                <p className="text-m text-white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat minus autem rerum numquam accusamus optio hic qui minima. Nulla nobis excepturi quam earum velit error sit laudantium asperiores sapiente totam.
                </p>
            </a>
        </div>
    );
}

const Footer  = () => {
    return (
        <div className="flex items-center justify-beetwen px-5 pb-5 gap-x-20">
            <span className="text-xl font-bold text-white">Rp 1.000.000</span>
            <Button className="bg-blue-600">Add to Cart</Button>
        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;