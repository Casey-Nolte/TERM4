import React, { useEffect } from 'react';
import LogoImgFile from '../assets/autoTicketLogo.png';
import styled from 'styled-components';
import {NavLinks} from './navlinks';
import Accessibility from './accessibility';
import profile_icon from '../assets/profileIMG.png'; 
import { Link } from "react-router-dom";
import profile from '../pages/user/Profile';

const NavBarContainer = styled.div`
    width: 100%;
    height: 60px;
    box-shadow:0 1px 3px rgba(15, 15, 15, 0.13);
    display: flex;
    align-items:center;
    padding: 0 1.5em;
    background-color: #1c3423;
`;

const LeftSection = styled.div`
    display: flex;
`;

const MiddleSection = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 2em;
`;

const NavLogo = styled.img`
    width: 70px;
    height: 60px;
`;

const Img = styled.img`
    width: 40px;
    height: 40px;
    margin-top:0.5em;
    margin-right:3em; 
    border-radius: 100%;
    cursor: pointer;
    object-fit:cover;
    transition: 0.2s ease-in-out;

    &:hover{
        transform: scale(1.2);
    }
`;

const RightSection = styled.div`
    display: flex;
`;



export default function NavBar({profileImage }) {

    return <NavBarContainer>
        <LeftSection>
            <NavLogo src={LogoImgFile} alt="AutoTicket" />
        </LeftSection>
        <MiddleSection>
            <NavLinks />
        </MiddleSection>
        <RightSection>
            <Link to = "/profile">
            <Img src ={profileImage || profile_icon} alt="profileImage"/>
            </Link>
        </RightSection>
    </NavBarContainer>
}