import React from 'react'

const SidebarOption = ({text  , Icon  ,active }) => {
  return (
    <div className={`sidebaroption ${active && "sidebaroption--active"}`}>
        <Icon/>
        <h2>{text} </h2>
    </div>
  )
}

export default SidebarOption 