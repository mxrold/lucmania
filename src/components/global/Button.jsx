const Button = ({ text }) => {
    return (
        <button className="w-2/5 mx-auto p-1.5 bg-gray-900 rounded text-center px-1.5 text-base sm:text-lg font-medium tracking-wide text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600">
            {text}
        </button>
    )
}

export default Button