import Link from "next/link";
import { CgWebsite } from "react-icons/cg";

const Logo = () => {
  return (
    <Link
      href="#home"
      className="flex  items-center  space-x-2 "
      aria-label="Kryo Studio Home"
    >
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <CgWebsite
          className="w-6 h-6 text-black"
          aria-hidden="true"
        />
      </div>

      <h1 className="hidden sm:block text-xl md:text-2xl font-bold text-white tracking-tight">
        Kryo Studio
      </h1>
    </Link>
  );
};

export default Logo;
