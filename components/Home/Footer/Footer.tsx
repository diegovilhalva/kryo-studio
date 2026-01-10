import Logo from "@/components/Helper/Logo"
import Image from "next/image"
import { BiCalendar } from "react-icons/bi"
import { FaFacebookF, FaInstagram, FaPaperPlane, FaPhone, FaYoutube } from "react-icons/fa6"
import { IoMailOpen } from "react-icons/io5"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"

const Footer = () => {
    return (
        <footer className="py-16    bg-blue-950 dark:bg-gray-900">
            <div className="w-[80%] mx-auto grid items-start grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* LOGO + DESCRIPTION */}
                <div>
                    <Logo />
                    <p className="mt-6 text-sm text-gray-300 leading-6 font-semibold">
                        Kryo Studio is a creative digital agency delivering high-quality design,
                        development, and branding solutions to help businesses grow online.
                    </p>

                    <div className="flex items-center space-x-4 mt-6">
                        <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-600 duration-300">
                            <FaFacebookF className="w-6 h-6 text-white" />
                        </div>
                        <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-red-600 duration-300">
                            <FaYoutube className="w-6 h-6 text-white" />
                        </div>
                        <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-pink-600 duration-300">
                            <FaInstagram className="w-6 h-6 text-white" />
                        </div>
                    </div>
                </div>

                {/* ADDRESS */}
                <div className="lg:mx-auto">
                    <h1 className="text-lg font-bold text-white">Address</h1>
                    <div className="mt-8">
                        <div className="flex items-center space-x-5">
                            <FaPaperPlane className="w-5 h-5 text-white" />
                            <p className="font-medium text-sm text-white">
                                Old City Street, USA <br /> 1212 New York
                            </p>
                        </div>

                        <div className="flex items-center space-x-5 mb-5 mt-5">
                            <FaPhone className="w-5 h-5 text-white" />
                            <p className="font-medium text-sm text-white">014 55555555</p>
                        </div>

                        <div className="flex items-center space-x-5 mb-5 mt-5">
                            <IoMailOpen className="w-5 h-5 text-white" />
                            <p className="font-medium md:text-sm text-[8px] text-white">
                                example@kryostudio.com
                            </p>
                        </div>
                    </div>
                </div>

                {/* MORE SERVICES */}
                <div className="lg:mx-auto">
                    <h1 className="text-lg font-bold text-white">More Services</h1>

                    <div className="mt-8">
                        {["UI Design", "UX Design", "Web App", "Digital Marketing", "Video Editing"].map((item) => (
                            <div className="flex items-center mb-2" key={item}>
                                <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
                                <p className="font-medium text-sm text-white">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* NEWSLETTER */}
                <div className="mx-auto">
                    <h1 className="text-lg font-bold text-white">Newsletter</h1>

                    <div className="mt-8">
                        <p className="font-medium text-sm text-white">
                            Stay updated with our latest articles, industry insights,
                            and creative trends. Subscribe and never miss an update.
                        </p>

                        <div className="mt-5 flex items-center space-x-4">
                            <Image src={"/images/f.jpg"} alt="thumbnail" width={30} height={25} />

                            <div className="flex-1">
                                <div className="flex items-center">
                                    <BiCalendar className="text-amber-300 w-6 h-6 mr-2" />
                                    <p className="text-white text-sm font-semibold">
                                        25 October, 2026
                                    </p>
                                </div>

                                <h1 className="mt-2 text-sm text-white font-bold">
                                    How Creative Agencies Shape the Future of Digital Brands
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* COPYRIGHT */}
            <div className="border-t-2 w-[80%] mx-auto border-gray-700 mt-8">
                <p className="mt-8 text-gray-300">
                    &copy; Kryo Studio {new Date().getFullYear()} | All Rights Reserved
                </p>
            </div>

        </footer>
    )
}

export default Footer
