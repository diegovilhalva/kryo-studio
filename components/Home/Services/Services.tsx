import ServiceCard from "./ServiceCard"

const Services = () => {
  return (
    <div className="py-20 bg-[#eff3f6] dark:bg-gray-900">
      <div>
        <h1 className="text-red-500 dark:text-red-300 font-medium text-center">
          Our Services
        </h1>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider">
          Provided Features
        </h1>
      </div>

      <div className="w-[80%] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
        >
          <ServiceCard
            title="Design and Development"
            icon="/images/s1.png"
            description="We craft modern, responsive, and visually captivating digital experiences tailored to your brand’s goals."
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >

          <ServiceCard
            title="Account Settings"
            icon="/images/s2.png"
            description="Manage your preferences, security options, and user configurations with ease and total control."
          />
        </div>


        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <ServiceCard
            title="Notification Manage"
            icon="/images/s3.png"
            description="Organize alerts and streamline communication with a powerful, flexible notification system."
          />
        </div>


        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <ServiceCard
            title="Customer Support"
            icon="/images/s4.png"
            description="Get fast, reliable, and human-focused support designed to help you overcome any challenge."
          />
        </div>


        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >

          <ServiceCard
            title="Email Marketing"
            icon="/images/s5.png"
            description="Boost engagement and conversions with strategic, beautifully crafted email campaigns."
          />
        </div>


        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="500"
        >
          <ServiceCard
            title="Digital Agency"
            icon="/images/s6.png"
            description="Full-service digital solutions to grow your business and elevate your online presence."
          />
        </div>


      </div>
    </div>
  )
}

export default Services
