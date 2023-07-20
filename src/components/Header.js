// Header.js
import React, { useState } from 'react';
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement';
import logo from '../Images/logo.png';
import styled from 'styled-components';
import Login from './Login';
import Signup from './Signup';
import { useNavigate } from 'react-router-dom';

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 80px;
  width: 200px;
  object-fit: contain;
`;

const Header = () => {
  const [loginPopup, setLoginPopup] = useState(false);
  const [signupPopup, setSignupPopup] = useState(false);
  const [isLogIn, setIslogIn] = useState("");
  const [issignUp, setIsSignUp] = useState("")


  const togglePopup = (para) => {
    //event.preventDefault();
    setLoginPopup(!loginPopup);
    setIslogIn(para);
  };

  const togglePopupSignup = (item) => {
    //event.preventDefault();
    setSignupPopup(!signupPopup);
    setIsSignUp(item)
  };

  return (
    <>
      <PrimaryNav>
        <ImageContainer>
          <LogoImage src={logo} />
        </ImageContainer>
        <Hamburger />
        <Menu>
          <MenuLink to="/" activestyle>
            Explore
          </MenuLink>
          <MenuLink to="/create" activestyle>
            Create
          </MenuLink>
          <MenuLink to="/event" activestyle>
            Events
          </MenuLink>
          {!isLogIn &&
            <MenuLink to="#" activestyle onClick={togglePopup}>
              Login
            </MenuLink>
          }
          {
            isLogIn &&
            <MenuLink to="#" activestyle onClick={() => togglePopup("")}>
              Log Out
            </MenuLink>
          }
          {!issignUp &&
            <MenuLink to="#" activestyle onClick={togglePopupSignup}>
              SignUp
            </MenuLink>
          }
          {issignUp &&
            <MenuLink to="#" activestyle onClick={togglePopupSignup}>
              SignUp
            </MenuLink>
          }

        </Menu>
      </PrimaryNav>

      {loginPopup && <Login togglePopup={togglePopup} />}
      {signupPopup && <Signup togglePopupSignup={togglePopupSignup} />}
    </>
  );
};

export default Header;
