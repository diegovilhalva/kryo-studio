import Image from "next/image";
import { FaQuoteRight, FaStar } from "react-icons/fa6";

type Props = {
  user: {
    id: number;
    name: string;
    profession: string;
    userImage: string;
    review: string;
  };
};

const ReviewCard = ({ user }: Props) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg m-3 p-6 relative shadow-sm">
      <FaQuoteRight className="w-8 h-8 absolute top-4 right-4 text-red-600 opacity-30" />

      <div className="mt-6 flex items-center">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="w-4 h-4 text-yellow-500" />
        ))}
      </div>

      <p className="mt-6 text-base text-gray-600 dark:text-gray-300 opacity-80 leading-relaxed font-medium">
        {user.review}
      </p>

      <div className="w-full h-[1.5px] bg-gray-500 dark:bg-gray-300 opacity-40 mt-6"></div>

      <div className="flex items-center space-x-4 mt-4">
        <Image
          src={user.userImage}
          alt={user.name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h1 className="font-bold text-gray-800 dark:text-gray-100">{user.name}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">{user.profession}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
