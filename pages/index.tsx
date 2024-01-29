import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Link from 'next/link'

import LinkHome from '../components/LinkHome'

const Home: NextPage = () => {
  const HomeStyled = styled.div`
    padding-left: 100px;
    padding-top: 70px;
    .titleHome {
      width: 100%;
      display: flex;
      justify-content: center;
      text-align: center;
      font-size: 60px;
      letter-spacing: 2px;
      font-family: russo;
      font-weight: normal;
      .name,
      .lastname {
        display: block;
        margin: 20px;
        margin-top: 0px;
        margin-bottom: 0px;
        animation: nameFly 2s ease-in-out infinite alternate-reverse both;
      }
      .lastname {
        animation-delay: 0.5s;
      }
      .orange,
      .cyan {
        font-size: 80px;
      }
      .orange {
        color: var(--orange);
        text-shadow: 0px 0px 5px var(--orange);
      }
      .cyan {
        color: var(--cyan);
        text-shadow: 0px 0px 5px var(--cyan);
      }
    }
    .textHome {
      width: 100%;
      text-align: center;
      font-size: 25px;
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .linksHome {
      display: flex;
      flex-flow: row wrap;
      width: 100%;
      justify-content: space-evenly;
      margin-top: 150px;
      margin-bottom: 100px;
      .linkHome {
        transform: scale(0.9, 0.9);
      }
    }
    @media (max-width: 1102px) {
      .linkHome {
        transform: scale(0.6, 0.6) !important;
      }
    }

    @media (max-width: 716px) {
      .linksHome {
        flex-flow: column wrap;
        align-items: center;
        margin: 0px;
        .linkHome {
          margin-top: 30px;
          span:nth-child(2),
          span:nth-child(4){
            display: none;
          }
        }
        .linkHome:nth-child(1) {
          margin-top: 0px;
        }
      }
      .titleHome {
        width: 100%;
        font-size: 40px;
        .orange,
        .cyan {
          font-size: 45px;
        }
      }
      .textHome {
        width: calc(100% - 40px);
        padding: 20px;
      }
    }
    @media (max-width: 489px) {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px !important;
      margin-top: 60px;
    }
    @media(max-width: 433px) {
      padding-bottom: 150px;
    }
    @media (max-width: 393px) {
      .titleHome {
        font-size: 30px;
        .orange,
        .cyan {
          font-size: 35px;
        }
      }
    }
  `
  
  return (
    <HomeStyled>
      <h1 className='titleHome'>
        <span className='name'>
          <span className='orange'>T</span>hiago
        </span> 
        <span className='lastname'>
          <span className='cyan'>P</span>uyelli
        </span>
      </h1>
      <p className="textHome">
        Soy desarrollador web y esta es mi pagina web
      </p>
      
      
      <div className="linksHome">
        <Link href='/about' className='linkHome'>
          <LinkHome color='var(--orange)' content='sobre mi'/>
        </Link>
        <Link href='/projects' className='linkHome'>
          <LinkHome color='var(--cyan)' content='Proyectos'/>
        </Link>
        <Link href='/contact' className='linkHome'>
          <LinkHome color='var(--green)' content='Contacto'/>
        </Link>
      </div>
    </HomeStyled>
  )
}

export default Home
