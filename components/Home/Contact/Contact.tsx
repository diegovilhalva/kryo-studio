import Image from "next/image";

const Contact = () => {
  return (
    <div className="py-20">
      <div>
        <h1 className="text-red-500 dark:text-red-300 font-medium text-center">
          Our Contact Information
        </h1>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider">
          Join Our Workplaces Around the World
        </h1>
      </div>

      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
        <Image
          src={"/images/map.png"}
          alt="Global map with workplace locations"
          width={900}
          height={900}
          className="mx-auto mt-16"
        />

        <div className="mt-16">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Send Message
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <input
              type="email"
              placeholder="Your Email"
              aria-label="Your Email"
              className="border-2 border-gray-200 dark:border-gray-700 px-4 py-3 rounded-full outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              aria-label="Phone Number"
              className="border-2 border-gray-200 dark:border-gray-700 px-4 py-3 rounded-full outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            />
            <input
              type="text"
              placeholder="Website"
              aria-label="Website"
              className="border-2 border-gray-200 dark:border-gray-700 px-4 py-3 rounded-full outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            />
          </div>

          <textarea
            rows={9}
            placeholder="Your Message"
            aria-label="Your Message"
            className="mt-10 w-full border-2 dark:border-gray-700 border-gray-200 px-4 py-3 rounded-lg outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          ></textarea>

          <button className="mt-10 text-white rounded-full px-14 py-4 cursor-pointer bg-pink-600 hover:bg-pink-700 transition-all">
            Submit Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
