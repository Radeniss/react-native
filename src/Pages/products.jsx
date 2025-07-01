const ProductsPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-full max-w-sm bg-gray-600 border border-gray-700 rounded-lg shadow">
                <a href="">
                    <img 
                        src="/images/car-1.png" 
                        alt="product" 
                        className="p-8 rounded-t-lg "/>
                </a>
                <div 
                    className="px-5 pb-5">
                        <a href="">
                            <h5 className="text-xl font-semibold tracking-tight text-white">New Car</h5>
                            <p className="text-m text-white">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat minus autem rerum numquam accusamus optio hic qui minima. Nulla nobis excepturi quam earum velit error sit laudantium asperiores sapiente totam.
                            </p>
                        </a>
                </div>
                <div className="flex items-center justify-center"></div>
            </div>
        </div>

    );
};

export default ProductsPage;