import React from 'react';
import { motion } from 'framer-motion';

const variant = {
  default: { width: 0 },
  actives: { width: 'calc(100%-0.75rem' }
};

const TabButton = ({ actives, selectTab, children} : any) => {
  const buttonClasses=  actives ? 'text-white' : 'text-[#ADB7B3]'
  return (
    <button type='button' onClick={selectTab} >
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div 
      animate={actives ? "active" : "default"}
      variants={variant}
       className='h-1 bg-purple-900 '>
      
      </motion.div>
    </button>
  )
}

export default TabButton