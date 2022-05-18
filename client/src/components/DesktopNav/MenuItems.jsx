import { useState, useEffect, useRef } from 'react'
import DesktopDropdown from './DesktopDropdown'

import { MenuLink, TempLink } from './desktopNavStyles'


const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false)
  let ref = useRef()

  useEffect(() => {
    const handler = (e) => {
      if (dropdown && ref.current && !ref.current.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup event listeners
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 560 && setDropdown(true);
  };
  
  const onMouseLeave = () => {
    window.innerWidth > 560 && setDropdown(false);
  };  

  return (
    <div  
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <MenuLink
            href={items.url}
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.name}
          </MenuLink>
        
          <DesktopDropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown = {dropdown}
          />  
        </>
      ) : (
        <div>
          {depthLevel > 0 ? <TempLink href={items.url} >{items.title}</TempLink> : <MenuLink href={items.url} >{items.name}</MenuLink>}
        </div>
        
      )}
    </div>
  )
}

export default MenuItems