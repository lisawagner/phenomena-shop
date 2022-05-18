import styled from 'styled-components';

export const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const LanguageSelect = styled.select`
  border: none;
  display: block;
  padding: 3px 0;
  font-size: ${(props) => props.size};
  font-size: large;
  color: var(--sonic-silver);
  text-transform: uppercase;
  cursor: pointer;
  transition: var(--transition-timing);

`