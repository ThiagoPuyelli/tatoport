import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import linkImg from '../public/img/link.png'

type ProjectComponent = {
  title: string,
  image: any,
  text: string,
  link: string
}

const Project = ({title, image, text, link}: ProjectComponent) => {
  const ProjectStyled = styled.div`
    width: 320px;
    height: 320px;
    margin: 20px;
    .contentFron {
      transition: 600ms all;
      padding: 20px;
      transform-style: preserve-3d;
      background: rgba(0, 0, 0, 0.5);
      border: 2px solid rgba(8, 178, 227, 0.8);
      border-radius: 20px;
      .projectImage {
        width: 100%;
        margin-top: 20px;
        transform: translateZ(20px);
        * {
          width: 100%;
          height: 100%;
        }
      }
      .projectTitle {
        transform: translateZ(20px);
        font-size: 21px;
      }
    }
    .contentBack {
      display: block;
      position: absolute;
      width: 320px;
      height: 257px;
      margin-top: -257px;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: center;
      transform: rotateY(-180deg);
      backface-visibility: hidden;
      transition: 600ms all;
      transform-style: preserve-3d;
      border-radius: 20px;
      background: rgba(0, 0, 0, 0.9);
      border: 2px solid rgba(8, 178, 227, 0.8);
      padding: 20px;
      .textProject {
        transform: translateZ(60px);
        backface-visibility: hidden;
        text-align: center;
      }
      .linkProject {
        width: 50px;
        padding: 10px;
        border-radius: 20px;
        transform: translateZ(60px);
        backface-visibility: hidden;
        height: 50px;
        transition: 300ms all;
        overflow: hidden;
        * {
          width: 100%;
          height: 100%;
        }
        :hover {
          transform: scale(1.1, 1.1);
          background: rgba(54, 57, 82, 0.7);
          * {
            animation: orangeHover 600ms;
          }
        }
      }
    }
    :hover {
      .contentFron {
        transform: rotateY(180deg);
      }
      .contentBack {
        transform: rotateY(0deg);
      }
    }
    @media (max-width: 375px) {
      transform: scale(0.83, 0.83);
    }
  `
  return (
    <ProjectStyled key={title}>
      <div className="contentFron">
          <h1 className="projectTitle">
            {title}
          </h1>
          <div className="projectImage">
            <Image src={image} alt={title}/>
          </div>
      </div>
      <div className="contentBack">
        <p className="textProject">
          {text}
        </p>
        <Link href={link} className='linkProject' target='_blank'>
          <Image src={linkImg} alt={'Link to ' + title} />
        </Link>
      </div>
    </ProjectStyled>
  )
}

export default Project