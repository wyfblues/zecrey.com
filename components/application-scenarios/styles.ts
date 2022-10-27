import styled from "styled-components";
import { CenterFlex, vw } from "styles/globals";

export const Wrap = styled.div`
  padding: 5rem 0;
  min-width: 84rem;
  height: 41rem;
  margin-top: -7.4rem;
  margin-right: -4rem;
  overflow: hidden;
  .items-wrap {
    margin-bottom: 3rem;
    opacity: 1;
    transform: translateY(0);
    transition: opacity 1s cubic-bezier(0.44, 0.01, 0.23, 0.97),
      transform 0.8s cubic-bezier(0.44, 0.01, 0.23, 0.97);
    &.upper {
      opacity: 0;
    }
  }
  .description-wrap {
    position: relative;
    width: 84rem;
    height: 31rem;
    transform: translateY(0);
    transition: transform 0.8s cubic-bezier(0.44, 0.01, 0.23, 0.97);
  }
  .upper {
    transform: translateY(-34rem);
  }
`;

export const ItemCard = styled(CenterFlex)`
  flex-direction: column;
  width: 40.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 5rem 0;
  transition: border 120ms ease-out;
  &:first-child {
    margin-right: 3rem;
  }
  &:hover {
    border-color: #2ad4d9;
  }
  .icon {
    width: 10rem;
    min-width: 10rem;
    height: 10rem;
    min-height: 10rem;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.25);
    svg.chats {
      width: 4.8rem;
      height: 3.8rem;
    }
    svg.nfts {
      width: 4rem;
      height: 4rem;
    }
  }
  .name {
    font-family: "IBM Plex Sans";
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.1rem;
    letter-spacing: 0.02rem;
    color: #2ad4d9;
    padding: 1rem 0;
  }
  .sub {
    font-family: "Source Sans Pro";
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #c1c1c1;
  }
  button {
    width: 9.6rem;
    height: 2.6rem;
    background: rgba(255, 255, 255, 0.05);
    border: 0.1rem solid rgba(255, 255, 255, 0.2);
    border-radius: 1.8rem;
    font-family: "IBM Plex Sans";
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 2.4rem;
    letter-spacing: 0.015rem;
    color: #fff;
    margin-top: 2.6rem;
    transition: all 120ms ease-out;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: #2ad4d9;
    }
  }
`;

export const MobileItemCard = styled(CenterFlex)`
  flex-direction: column;
  width: ${vw(260)};
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${vw(15)};
  padding: ${vw(40)} 0;
  margin-top: ${vw(15)};
  &:first-child {
    margin-top: ${vw(50)};
  }
  .icon {
    width: ${vw(100)};
    min-width: ${vw(100)};
    height: ${vw(100)};
    min-height: ${vw(100)};
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.25);
    svg.chats {
      width: ${vw(48)};
      height: ${vw(38)};
    }
    svg.nfts {
      width: ${vw(40)};
      height: ${vw(40)};
    }
  }
  .name {
    font-family: "IBM Plex Sans";
    font-weight: 600;
    font-size: ${vw(16)};
    line-height: ${vw(21)};
    color: #2ad4d9;
    padding: ${vw(10)} 0;
  }
  .sub {
    width: 90%;
    text-align: center;
    font-family: "Source Sans Pro";
    font-size: ${vw(14)};
    line-height: ${vw(18)};
    color: #c1c1c1;
  }
`;

export const ContentWrap = styled.div<{ ac: boolean }>`
  position: absolute;
  width: 84rem;
  height: 31rem;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.05);
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  opacity: ${(props) => (props.ac ? 1 : 0)};
  transition: opacity 1s cubic-bezier(0.44, 0.01, 0.23, 0.97);
  pointer-events: ${(props) => (props.ac ? "auto" : "none")};
  .close {
    position: absolute;
    width: 4rem;
    height: 2.6rem;
    top: 1.5rem;
    right: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border: 0.1rem solid rgba(255, 255, 255, 0.2);
    border-radius: 1.8rem;
    transition: all 120ms ease-out;
    svg {
      width: 1rem;
      height: 1rem;
      color: #fff;
    }
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: #2ad4d9;
    }
  }
  .header {
    font-family: "IBM Plex Sans";
    font-weight: 600;
    font-size: 1.6rem;
    letter-spacing: 0.02rem;
    color: #2ad4d9;
    padding: 1.5rem 0 3.8rem 0;
    text-align: center;
  }
  .text {
    width: 70rem;
    margin: 3rem auto 0 auto;
    font-family: "Source Sans Pro";
    font-size: 1.6rem;
    line-height: 2rem;
    color: #f5f5f5;
  }
  .tip-wrap {
    pointer-events: none;
  }
  .trigger::before {
    display: none;
  }
`;

const Chart = styled(CenterFlex)`
  width: 80rem;
  margin: 0 auto;
  .bubble-button {
    background: none;
    .trigger {
      padding: 0;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 50%;
      &:hover {
        box-shadow: 0 0 0 0.1rem #2ad4d9;
        svg {
          transform: none;
        }
      }
    }
    &.mobile,
    &.web {
      width: 8rem;
      height: 8rem;
    }
    &.payment,
    &.engine {
      width: 11rem;
      height: 11rem;
    }
    &.user {
      width: 4rem;
      height: 4rem;
    }
    .tip-wrap {
      width: auto;
      bottom: calc(100% + 1rem);
      left: unset;
      right: 50%;
      transform: translateX(50%);
    }
  }
`;

export const PaymentChart = styled(Chart)`
  .features {
    flex-direction: column;
    min-width: 18.5rem;
    margin: 0 1.5rem;
    span {
      display: inline-block;
      height: 2.3rem;
      padding: 0 1.1rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 1.4rem;
      font-family: Source Sans Pro;
      font-style: italic;
      font-size: 1rem;
      line-height: 2.3rem;
      color: rgba(255, 255, 255, 0.3);
      cursor: pointer;
      transition: all 120ms ease-out;
      &:first-child {
        margin-right: 0.7rem;
      }
      &:hover {
        background: #2ad4d9;
        color: #2b2b2b;
      }
    }
  }
  svg {
    margin: 1rem 0;
  }
`;

export const EngineChart = styled(Chart)`
  &.mobile,
  &.web {
    width: 8rem;
    height: 8rem;
  }
  &.engine {
    width: 11rem;
    height: 11rem;
  }
  .users {
    flex-direction: column;
    .user:first-child:not(svg) {
      margin-bottom: 1.6rem;
    }
  }
  svg.dashed-2 {
    width: 5rem;
    height: 0.1rem;
    margin: 0 1.5rem;
  }
  .dash3 {
    flex-direction: column;
    width: 7.5rem;
    margin: 0 1rem;
    svg.dashed-3 {
      width: 100%;
      &:last-child {
        transform: rotateY(180deg);
        margin-top: 2.4rem;
      }
    }
    &.right {
      transform: rotateY(180deg);
    }
  }
`;
