import styled from "@emotion/styled";
import Project from "../components/Project";
import BacordPage from '../public/img/BacordPage.png'
import EBacord from '../public/img/e-bacord.png'
import Maquetacion from '../public/img/Maquetacion.png'
import Crofo from '../public/img/Crofo.png'
import atdev from '../public/img/atdev.png'

const Projects = () => {
  const ProjectsStyled = styled.div`
    padding-left: 100px;
    padding-top: 70px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    .titleProjects {
      font-family: russo;
      font-size: 55px;
      font-weight: normal;
      letter-spacing: 2px;
      .cyan {
        font-size: 65px;
        color: var(--cyan);
        text-shadow: 0px 0px 5px var(--cyan);
      }
    }
    .projects {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      margin-top: 40px;
      width: 100%;
    }
    .textProjects {
      margin-top: 40px;
      font-size: 19px;
    }

    @media (max-width: 807px) {
      .textProjects {
        width: calc(100% - 40px);
        padding: 20px;
        text-align: center;
      }
    }
    @media (max-width: 489px) {
      padding-left: 20px;
      padding-right: 20px;
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      margin-top: 60px;
    }

    @media (max-width: 375px) {
      .titleProjects {
        font-size: 40px;
        .cyan {
          font-size: 45px;
        }
      }
      .projects {
        width: 100%;
        margin: 0px;
        padding: 0px;
      }
    }
  `

  return (
    <ProjectsStyled>
      <h1 className='titleProjects'><span className='cyan'>P</span>royectos</h1>
      <p className='textProjects'>Proyectos en los que he trabajado ya sea por mi cuenta o por trabajo</p>
      <div className="projects">
        <Project title='Bacord web' text='Diseño web de la pagina de bacord, grupo de desarrolladores de videojuegos en el cual trabajo' image={BacordPage} link='https://bacord.vercel.app/' />
        <Project title='E-Bacord' text='Pagina para bacord, pensado para dar cursos, quedo a medio desarrollo aunque se piensa retomar a mitad de este año' image={EBacord} link='https://ebacord.vercel.app/' />
        <Project title='Crofo web' text='Esta web, es el primer sitio web del que saque un crédito, desarrollando una web para un administrador de servidores de discord' image={Crofo} link='https://tatocrofo.vercel.app/' />
        <Project title='At Developing' text='Pagina pensada para desarrollar webs con un amigo, cosa que al final no se termino dando, aunque quedo una buena pagina' image={atdev} link='https://atdeveloping.vercel.app/' />
        <Project title='Primera maquetación' text='Esta página, fue de las primeras que hice en un curso de udemy' image={Maquetacion} link='https://maquetacion-wine.vercel.app/' />
      </div>
    </ProjectsStyled>
  )
}

export default Projects
