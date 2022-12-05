import React from "react";
import styled from "styled-components";


const St = {
  Footer: styled.footer`
    display: block;
    width: 100%;
    height: 100%;
     height: 20px; 
    padding: 20px 0;
    @media ${({ theme }) => theme.tablet} {
      display: none;
    }
  `,
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 20px;

    @media ${({ theme }) => theme.tablet} {
      display: block;
      max-width: 950px;
    }
  `,
  MainLink: styled.a`
    display: block;
    background-image: ${({ logo }) => `url(${logo})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    color: transparent;
    width: 130px;
    height: 60px;
  `,
  Description: styled.p`
    font-weight: 600;
    font-size: 0.9rem;
    color: gray;
    height: 10px;
    // width: 100px; /* 정렬하려는 요소의 넓이를 반드시 지정 */
    // margin: 0 auto;
  `,
  DescSpan: styled.span`
    display: block;
    height: 30px;
  `,
  ContactContainer: styled.address`
    display: flex;
    flex-direction: column;
    /* margin-left: 250px; */
  `,
  LinkTitle: styled.span`
    height: 25px;
    font-size: 0.9rem;
    font-weight: 600;
    color: gray;
  `,
  LinkTag: styled.a`
    display: flex;
    align-items: center;
    height: 30px;
    color: black;
    text-decoration: none;
  `,
  LinkSpan: styled.span`
    display: block;
    margin-left: ${({ marginLeft }) => marginLeft || "8px"};
    font-weight: 600;
    font-size: 0.9rem;
    height: 20px;
    /* line-height: 1.5rem; */
    color: gray;
  `,
};

const Footer = () => {
  return (

        <St.Description>
            Copyright © 2022 BITLINE. ALL RIGHTS RESERVED.
        </St.Description>
  );
};

export default Footer;
