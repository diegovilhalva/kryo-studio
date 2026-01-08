import PriceCard from "./PriceCard"


const Price = () => {
    return (
        <div className="py-20 bg-[#eff3f6] dark:bg-gray-900">
            <div>
                <h1 className="text-red-500 dark:text-red-300 font-medium text-center">
                    Pricing Table
                </h1>
                <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 font-bold">
                    Our Plans
                </h1>
            </div>
            <div className="w-[80%] mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center">
                <div>

                    <PriceCard
                        price="20"
                        title="Optimized & SEO"
                        features={[
                            "Basic SEO optimization",
                            "Standard updates",
                            "Email support",
                            "Responsive layout"
                        ]}
                    />
                </div>
                <div>

                    <PriceCard
                        price="50"
                        title="Designing"
                        features={[
                            "Custom UI layouts",
                            "Brand identity support",
                            "Advanced animations",
                            "Figma to React"
                        ]}
                    />
                </div>
                <div>
                    <PriceCard
                        price="60"
                        title="Development"
                        features={[
                            "Full-stack development",
                            "API integrations",
                            "Performance optimization",
                            "Real-time features"
                        ]}
                    />
                </div>
                <div>
                    <PriceCard
                        price="80"
                        title="Supporting"
                        features={[
                            "24/7 customer support",
                            "Priority bug fixes",
                            "Dedicated manager",
                            "Weekly updates"
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Price