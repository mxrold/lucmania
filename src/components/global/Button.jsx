const Button = ({ text, key, onClick, width }) => {
    return (
        <button 
        key={key}
        onClick={onClick}
        className={`${width} p-1.5 bg-gray-900 rounded text-center px-1.5 text-base max-content sm:text-lg font-medium tracking-wide text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300`}>
            {text}
        </button>
    )
}

export default Button