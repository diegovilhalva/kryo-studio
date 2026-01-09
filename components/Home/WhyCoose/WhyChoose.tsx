import Image from "next/image"
import { BiSupport } from "react-icons/bi"
import { FaHammer, FaRocket } from "react-icons/fa6"

const WhyChoose = () => {
    return (
        <div className="py-20">
            <div className="w-[80%] mx-auto grid lg:grid-cols-2 gap-10 items-center">
                <div
                    data-aos="fade-left"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="0"
                >
                    <h1 className="text-red-500 dark:text-red-300 font-medium">
                        Why Choose Us
                    </h1>

                    <h1 className="text-2xl md:text-4xl lg:text-5xl leading-8 md:leading-12 lg:leading-14 text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider">
                        Specialist in advising clients on digital challenges
                    </h1>

                    <p className="mt-4 text-gray-500 dark:text-gray-300 leading-7">
                        Our mission is to help businesses grow through smart, modern, and effective digital solutions.
                        We blend strategy, creativity, and technology to deliver results that truly make an impact.
                    </p>

                    <div className="mt-8">

                        {/* Fast Working Process */}
                        <div className="flex items-center space-x-6 mb-10">
                            <div className="flex items-center justify-center flex-col w-18 h-18 rounded-full bg-red-600 dark:bg-pink-500">
                                <FaRocket className="text-white w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                    Fast Working Process
                                </h1>
                                <p className="mt-2 text-gray-500 dark:text-gray-300 leading-6 lg:w-[85%]">
                                    We follow a streamlined workflow that reduces delays, increases efficiency,
                                    and ensures faster delivery without compromising quality.
                                </p>
                            </div>
                        </div>

                        {/* Dedicated Team */}
                        <div className="flex items-center space-x-6 mb-10">
                            <div className="flex items-center justify-center flex-col w-18 h-18 rounded-full bg-blue-600 dark:bg-indigo-500">
                                <FaHammer className="text-white w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                    Dedicated Team
                                </h1>
                                <p className="mt-2 text-gray-500 dark:text-gray-300 leading-6 lg:w-[85%]">
                                    Our specialists work with passion and precision, fully committed to bringing
                                    your vision to life with exceptional attention to detail.
                                </p>
                            </div>
                        </div>

                        {/* 24/7 Support */}
                        <div className="flex items-center space-x-6 mb-10">
                            <div className="flex items-center justify-center flex-col w-18 h-18 rounded-full bg-green-600 dark:bg-yellow-400">
                                <BiSupport className="text-white w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                    24/7 Support
                                </h1>
                                <p className="mt-2 text-gray-500 dark:text-gray-300 leading-6 lg:w-[85%]">
                                    Whenever you need assistance, our support team is available around the clock
                                    to help you solve issues and keep your business running smoothly.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div data-aos="fade-right"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="100">
                    <Image src={"/images/wc.png"} alt="img" width={1000} height={1000} />
                </div>
            </div>
        </div>
    )
}

export default WhyChoose
