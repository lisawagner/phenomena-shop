import React from 'react'
import { NAVLINKS } from '../../models/navlinks'
import MenuItems from './MenuItems'

import { DesktopNavigation, DesktopNavWrap, DesktopMenuList } from './desktopNavStyles'

const DesktopNav = () => {
  return (
    <>
      <DesktopNavigation>

        <DesktopNavWrap>
          <DesktopMenuList>
            {NAVLINKS.map( (item, index) => {
              const depthLevel = 0;
              return <MenuItems items={item} key={index} depthLevel={depthLevel} />
            } )}
          </DesktopMenuList>
        </DesktopNavWrap>

      </DesktopNavigation>
    </>
  )
}

export default DesktopNav