import styled from 'styled-components';
import MenuItems from './MenuItems'

const DropdownListUL = styled.ul.attrs(
  props => ({ className: props.className, })
)`
  position: absolute;
  width: 200px;
  background: var(--white);
  padding: 20px 0;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--cultured);
  box-shadow: 0 3px 5px hsla(0, 0%, 0%, 0.1);
  transition: var(--transition-timing);
  transform: translateY(60px);
  visibility: hidden;
  opacity: 0;
  z-index: 999;

  &.show {
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
  }
`

const DesktopDropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;

  return (
    <DropdownListUL className={`${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={submenu.id} depthLevel={depthLevel} />
      ))}
    </DropdownListUL>
  )
}

export default DesktopDropdown