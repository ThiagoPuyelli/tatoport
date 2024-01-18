import styled from "@emotion/styled";
import Image from 'next/image'
import typescript from '../public/img/typescript.png'
import react from '../public/img/react.svg'
import nodejs from '../public/img/nodejs.png'
import mongo from '../public/img/mongo.png'
import nextjs from '../public/img/nextjs.png'
import c from '../public/img/c.png'
const About = () => {
  const AboutStyled = styled.div`
    padding-left: 100px;
    padding-top: 70px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    .titleAbout {
      width: 100%;
      display: block;
      text-align: center;
      font-size: 55px;
      letter-spacing: 2px;
      font-family: russo;
      font-weight: normal;
      .orange {
        font-size: 65px;
        color: var(--orange);
        text-shadow: 0px 0px 5px var(--orange);
      }
    }
    .textAbout {
      display: block;
      width: 700px;
      margin-top: 70px;
      font-size: 19px;
      text-align: center;
    }
    .skills {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      margin-top: 100px;
      .skillsTitle {
        display: block;
        width: 100%;
        text-align: center;
      }
      .skill {
        margin: 20px;
        width: 70px;
        height: 70px;
        padding: 10px;
        background: var(--secondaryColor);
        border-radius: 10px;
        * {
          width: 100%;
          height: 100%;
        }
      }
    }

    @media (max-width: 846px) {
      .textAbout {
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
      padding-bottom: 100px;
    }
  `

  return (
    <AboutStyled>
      <h1 className='titleAbout'>
        <span className='orange'>S</span>obre
        <span className='orange'> M</span>i
      </h1>
      <p className='textAbout'>Tengo 20 años, desde abril del 2020 que empece a programar, aprendiendo desarrollo web, actualmente estudiando sistemas y con experiencias en varios proyectos, ya con 2 años de experiencia trabajando</p>
      <div className="skills">
        <h1 className='skillsTitle'>Algunos de mis conocimientos</h1>
        <div className="skill">
          <Image src={typescript} alt='typescript' />
        </div>
        <div className="skill">
          <Image src={react} style={{transform: 'scale(1.2, 1.2)'}} alt='react' />
        </div>
        <div className="skill">
          <Image src={nodejs} alt='nodejs' style={{transform: 'scale(1.8, 1.8)'}} />
        </div>
        <div className="skill">
          <Image src={mongo} alt='mongo' style={{transform: 'scale(1.5, 1.5)'}} />
        </div>
        <div className="skill">
          <Image src={c} alt='c' style={{transform: 'scale(1.5, 1.5)'}} />
        </div>
        <div className="skill">
          <Image src={nextjs} alt='nextjs' style={{
            transform: 'scale(1.2, 1.2)',
            height: '38px',
            marginTop: '8px'
          }} />
        </div>
      </div>
    </AboutStyled>
  )
}

export default About