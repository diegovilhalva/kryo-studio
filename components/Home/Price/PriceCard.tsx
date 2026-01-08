type Props = {
    price: string
    title: string
    features: string[]
}

const PriceCard = ({ title, price, features }: Props) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200 tracking-wider mt-4 text-center">
                {title}
            </h1>

            <p className="mt-4 text-gray-500 dark:text-gray-300 mb-6 text-center">
                Monthly Package
            </p>

            <h1 className="font-bold text-center text-gray-900 dark:text-gray-100">
                <span className="text-5xl">${price}</span>/month
            </h1>

            <div className="mt-8 space-y-4 text-sm text-gray-500 tracking-wider text-center dark:text-gray-100">
                {features.map((feature, i) => (
                    <p key={i}>{feature}</p>
                ))}
            </div>

            <div className="mt-6 mb-6 text-center">
                <button className="px-8 py-3 bg-pink-500 hover:bg-pink-700 text-white font-semibold cursor-pointer rounded-full transition-all duration-200">
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default PriceCard
