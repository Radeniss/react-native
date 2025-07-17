import Button from "../Elements/Button";

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

const Body = (props) => {
    const { children, title } = props;
    return (
        <div 
            className="px-5 pb-5">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white pt-2">
                {title}
                </h5>
                <p className="text-m text-white">
                {children}
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