const Button = ({ name, handleClick , disabled }) => {
    return (
        <button className={`bg-green-700 w-fit h-fit text-white px-5 py-2 rounded-full font-semibold self-end ${disabled?"cursor-not-allowed":"cursor-pointer"}`} onClick={handleClick} disabled = {disabled}>
            {name}
        </button>
    )
}

export default Button;