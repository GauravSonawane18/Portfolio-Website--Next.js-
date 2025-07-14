import { motion } from "framer-motion"

// // variants
// const stairAnimation = {
//     initial: {
//         top: "0%",
//     },
//     animate: {
//         top: "100%",
//     },
//     exit: {
//         top: ["100%", "0%"],
//     },
// }

// // Calculate the reverse index for Staggered delay
// const reverseIndex = (index) => {
//   const totalSteps = 6;  // number of steps
//   return totalSteps - index - 1;
// }

// const Stairs = () => {
//   return (
//     <>
//     {/* render 6 motion divs, each representing a step of the stairs.
//     Each div will have the same animation defined by the StairsAnimation object.
//     The delay for each div is calculated dynamically based on its reversed index,
//     Creating a staggered effect with decreasing delay with each subsequent step.
//     */}
//     {[...Array(0)].map((_, index)=> {
//       return (
//         <motion.div 
//           key={index} 
//           variants={stairAnimation} 
//           initial="initial" 
//           animate="animate" 
//           exit="exit" 
//           transition={{
//             duration: 0.4,
//             ease: 'easeInOut',
//             delay: reverseIndex(index) * 0.1,
//           }} 
//           className="h-full w-full bg-white relative"
//         />
//       )
//     })}
//     </>
//   );
// }

// export default Stairs









import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BlurFadeTransition from "./BlurFadeTransition";

function ToggleComponent() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <BlurFadeTransition />
            <YourComponent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}