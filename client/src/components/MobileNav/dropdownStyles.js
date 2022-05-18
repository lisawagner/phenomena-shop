import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const SidebarLink = styled(Link)`
  display: flex;
  color: var(--onyx);
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  list-style: none;
  text-decoration: none;
  font-size: 1.1rem;

  &:hover{
    color: pink;
    cursor: pointer;
  }
`

export const DropdownLink = styled(Link)`
  color: var(--onyx);
  padding-left: 1.5rem;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: pink;
  }
`

export const SidebarLabel = styled.span`
  margin-left: 10px;
`