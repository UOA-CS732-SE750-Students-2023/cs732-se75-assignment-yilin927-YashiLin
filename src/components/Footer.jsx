import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { MynameCanvas } from "./canvas";
 


const Footer = () => {
  return (
    <div className={`max-w-7xl mx-auto relative z-0`}>
       <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-right mt-20 NeonTextonHover`}>
        yiln927@aucklanduni.ac.nz

        </p>
        <h2 className={`${styles.sectionHeadText} text-right NeonTextonHover`}
            
        >
          CS732 - Tech Demo
        </h2>

        <div  className='max-w-7xl mx-auto relative z-0 h-[480px]'><MynameCanvas/>
        
        
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Footer)