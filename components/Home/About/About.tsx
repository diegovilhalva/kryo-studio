import Image from "next/image"

const About = () => {
  return (
    <div className="py-24 dark:bg-gray-950">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        
        {/* Left Image */}
        <div  data-aos="fade-left" data-aos-anchor-placement="top-center">
          <Image src={"/images/a1.png"} alt="About Kryo Studio" width={500} height={500} />
        </div>

        {/* Text Content */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <h1 className="text-purple-800 dark:text-purple-600 font-medium">About Us</h1>

          <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mt-2">
            We Are The Leader in Web Design
          </h1>

          <p className="text-gray-500 dark:text-gray-200 text-base leading-8 mt-8">
            At Kryo Studio, we blend creativity with technology to craft digital experiences
            that inspire, engage, and transform brands. Our team is passionate about building
            interfaces that feel intuitive and visually stunning—helping businesses stand out in an evolving digital world.
          </p>

          <p className="text-gray-500 dark:text-gray-200 text-base leading-8 mt-4">
            From custom websites to innovative design solutions, we approach every project with
            precision, strategy, and a commitment to excellence. Your vision becomes our mission,
            and together, we turn ideas into reality.
          </p>

          {/* Stats */}
          <div className="mt-10">
            <div className="flex items-center justify-between">

              <div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-pink-700">53K</h1>
                <p className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-500">
                  Layouts Completed
                </p>
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-pink-700">10K</h1>
                <p className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-500">
                  Projects Delivered
                </p>
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-pink-700">120K</h1>
                <p className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-500">
                  Awards Earned
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
