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

        <ServiceCard
          title="Design and Development"
          icon="/images/s1.png"
          description="We craft modern, responsive, and visually captivating digital experiences tailored to your brand’s goals."
        />

        <ServiceCard
          title="Account Settings"
          icon="/images/s2.png"
          description="Manage your preferences, security options, and user configurations with ease and total control."
        />

        <ServiceCard
          title="Notification Manage"
          icon="/images/s3.png"
          description="Organize alerts and streamline communication with a powerful, flexible notification system."
        />

        <ServiceCard
          title="Customer Support"
          icon="/images/s4.png"
          description="Get fast, reliable, and human-focused support designed to help you overcome any challenge."
        />

        <ServiceCard
          title="Email Marketing"
          icon="/images/s5.png"
          description="Boost engagement and conversions with strategic, beautifully crafted email campaigns."
        />

        <ServiceCard
          title="Digital Agency"
          icon="/images/s6.png"
          description="Full-service digital solutions to grow your business and elevate your online presence."
        />

      </div>
    </div>
  )
}

export default Services
