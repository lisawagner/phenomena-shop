import React, { useState } from 'react'

import {
  SidebarLink,
  DropdownLink,
  SidebarLabel
} from './dropdownStyles'

const Dropdown = ( { item, click, handleClick } ) => {
  const [subnav, setSubnav] = useState(false)
  const showSubnav = () => setSubnav(!subnav)

  return (
    <>
    <SidebarLink to={item.url} onClick={item.submenu && showSubnav}>
      <div>
        <SidebarLabel>{item.name}</SidebarLabel>
      </div>
      <div>
        {item.submenu && subnav ? item.iconClose : item.submenu ? item.iconOpen : null}
      </div>
    </SidebarLink>
      {subnav && item.submenu.map((item, index) => {
        return(
          <DropdownLink onClick={handleClick} to={item.url} key={index} >
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropdownLink>
        )
      })}
    </>
  )
}

export default Dropdown