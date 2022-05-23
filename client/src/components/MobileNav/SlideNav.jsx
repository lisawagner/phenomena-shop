import { NAVLINKS } from '../../models/navlinks'
import { MdClose } from 'react-icons/md'
import Dropdown from './Dropdown';

import {
  MobileNavigationMenu,
  SlideNavTop,
  SlideNavTitle,
  CloseNavBtn,
  MobileMenu,
  MenuCategory,
  TopActionsContainer,
  ActionSelect
} from './slideNavStyles'

const SlideNav = ({click, handleClick}) => {
  return (
    <>
      <MobileNavigationMenu clicked={click} >

        <SlideNavTop>
          <SlideNavTitle>phenomena</SlideNavTitle>
          <CloseNavBtn onClick={handleClick} >
            <MdClose  name="close-outline" />
          </CloseNavBtn>
        </SlideNavTop>

        <MobileMenu>
        {NAVLINKS.map( (item, index) => {
          return (
            <MenuCategory key={item.id} >
              <Dropdown item={item} key={item.id} click={click} handleClick={handleClick}/>
            </MenuCategory>
          )
        })}
        </MobileMenu>
      
        <TopActionsContainer>
            <ActionSelect>
              <option value="en-US">en</option>
              <option value="es-ES">es</option>
              <option value="fr">fr</option>
            </ActionSelect>
          </TopActionsContainer>

      </MobileNavigationMenu>
    </>
  )
}

export default SlideNav