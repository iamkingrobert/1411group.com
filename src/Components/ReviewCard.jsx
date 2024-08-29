import { motion } from "framer-motion";

const ReviewCard = ({ review, index }) => {
  return (
    <motion.div
      className="bg-white p-2 px-5 rounded-lg shadow-lg shadow-[#4fc4cb] flex flex-col"
      initial={{ x: index % 2 === 0 ? 100 : -100 }} // Start from right (100) or left (-100)
      animate={{ x: 0 }} // Animate to center (0)
      transition={{
        x: {
          duration: 2.5, // Slower transition speed
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: index * 0.5,
        },
      }}
    >
      {/* Your review content remains the same */}
      <p className="text-[#171b2c] text-2xl">“</p>
      <p className="text-gray-800 mt-4 text-left">{review.review}</p>
      <img src={review.image} className="w-12 h-12 rounded-full mt-4" />
      <p className="text-[#171b2c] font-bold text-[16px] mt-4 text-left">
        {review.name}
      </p>
      <p className="text-gray-500 font-mono text-[14px] text-left">{review.title}</p>
    </motion.div>
  );
};

export default ReviewCard;
