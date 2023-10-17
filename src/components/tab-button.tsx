import React from 'react'

const TabButton = ({ actives, selectTab, children} : any) => {
  const buttonClasses=  actives ? 'text-white border-b border-purple-500' : 'text-[#ADB7B3]'
  return (
    <button type='button' onClick={selectTab} >
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  )
}

export default TabButton