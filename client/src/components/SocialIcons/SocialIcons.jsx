import React from 'react'
import styled from "styled-components";
import { FaFacebookSquare, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'

const SocialContainer = styled.div`
  display: flex;
  /* margin-bottom: 1rem; */
  margin: 1.25rem auto;
  font-size: 1.375rem;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const SocialIcons = () => {
  return (
    <SocialContainer>
        <SocialIcon color="#ff7f50">
          <FaFacebookSquare />
        </SocialIcon>
        <SocialIcon color="#008080">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon color="#8F42FF">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon color="#008fc7">
          <FaPinterest />
        </SocialIcon>
      </SocialContainer>
  )
}

export default SocialIcons