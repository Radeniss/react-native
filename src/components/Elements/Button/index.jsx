const Button = (props) => {
  const {
    className,
    children = '...',
    onClick = () => {},
    type = "button"
  } = props;

  return (
    <button
      // Tambahkan whitespace-nowrap di sini
      className={`h-10 px-6 font-semibold rounded-md whitespace-nowrap ${className} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;