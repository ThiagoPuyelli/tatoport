import styled from "@emotion/styled";
import Link from "next/link";
import instagram from '../public/img/instagram.png'
import discord from '../public/img/discord.png'
import Image from "next/image";
import mail from '../public/img/contact.png'
import showAlert from "../utils/showAlert";

const Social = () => {
  const SocialStyled = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    top: 10px;
    right: 10px;
    z-index: 4;
    .linkSocial {
      display: block;
      width: 50px !important;
      height: 50px;
      padding: 8px;
      margin-right: 15px;
      border-radius: 20px;
      background: var(--secondaryColor);
      transition: 300ms all;
      overflow: hidden;
      cursor: pointer;
      * {
        width: 100%;
        height: 100%;
        transition: 300ms all;
      }
      :hover {
        transform: scale(1.2, 1.2);
        * {
          animation: orangeHover 600ms;
        }
      }
    }
    @media (max-width: 489px) {
      bottom: 10px;
      left: 10px;
      right: auto;
      top: auto;
      transform: scale(0.8, 0.8);
    }
  `

  const copyDis = (type: string, data: string) => {
    navigator.clipboard.writeText(data);
    const alert: HTMLElement|null = document.querySelector('.alert.' + type)
    showAlert(alert)
  };
  
  return (
    <SocialStyled>
      <Link href='https://www.instagram.com/thiago_puyelli/' className='linkSocial' target='_blank'>
        <Image src={instagram} alt='Mi instagram' />
      </Link>
      <div className='linkSocial' onClick={() => copyDis('discord', 'Tato#7290')}>
        <Image src={discord} alt='Mi discord' />
      </div>
      <div className='linkSocial' onClick={() => copyDis('mail', 'thiagopuyelli@gmail.com')}>
        <Image src={mail} alt='Mi correo' />
      </div>
    </SocialStyled>
  )
}

export default Social