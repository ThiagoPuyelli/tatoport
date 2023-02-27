import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import about from '../public/img/about.png'
import projects from '../public/img/projects.png'
import contact from '../public/img/contact.png'
import contactHover from '../public/img/contactHover.png'
import projectsHover from '../public/img/projectsHover.png'
import aboutHover from '../public/img/aboutHover.png'

const Header = () => {
  const HeaderStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0px;
    top: 0px;
    bottom: 0px;
    width: 100px;
    background: var(--secondaryColor);
    .links {
      width: 100%;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      .link,
        .linkHover {
          width: 50px;
          margin-top: 40px;
          * {
            width: 100%;
            height: 100%;
          }
        }
      .contentLink {
        width: 50px;
        margin-top: 40px;
        .link,
        .linkHover {
          width: 50px;
          margin-top: 40px;
          * {
            width: 100%;
            height: 100%;
          }
        }
        .linkHover {
          position: fixed;
          left: 25px !important;
          margin-top: 0px;
          background: var(--secondaryColor);
          opacity: 0;
          vissibility: hidden;
          transition: 300ms opacity;
        }
        :hover {
          animation: linkHover 300ms both;
          .linkHover {
            opacity: 1;
            margin-left: -25px !important;
            vissibility: show;
          }
        }
      }
    }

    @media (max-width: 489px) {
      bottom: auto;
      right: 0px !important;
      width: auto;
      z-index: 5;
      .links {
        flex-flow: row wrap;
        .contentLink {
          margin: 10px;
        }
      }
    }
   
  `

  return (
    <HeaderStyled>
      <div className="links">
        <div className="contentLink">
          <Link className="link" href='/about' passHref>
            <Image src={about} alt='Sobre mi' />
          </Link>
          <Link className="linkHover" href='/about' passHref>
            <Image src={aboutHover} alt='Sobre mi' />
          </Link>
        </div>
        <div className="contentLink">
          <Link className="link" href='/projects' passHref>
            <Image src={projects} alt='Mis proyectos' />
          </Link>
          <Link className="linkHover" href='/projects' passHref>
            <Image src={projectsHover} alt='Mis proyectos' />
          </Link>
        </div>
        <div className="contentLink">
          <Link className="link" href='/contact' passHref>
            <Image src={contact} alt='Contacto' />
          </Link>
          <Link className="linkHover" href='/contact' passHref>
            <Image src={contactHover} alt='Contacto' />
          </Link>
        </div>
      </div>
    </HeaderStyled>
  )
}

export default Header