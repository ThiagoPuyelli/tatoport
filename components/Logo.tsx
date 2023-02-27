import styled from "@emotion/styled"
import Link from "next/link"

const Logo = () => {
  const LogoStyled = styled.div`
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 3;
    font-size: 21px;
    font-family: russo;
    font-weight: normal;
    letter-spacing: 2px;
    .orange {
      color: var(--orange);
      display: block;
      text-shadow: 0px 0px 3px var(--orange);
    }
    .cyan {
      color: var(--cyan);
      display: block;
      text-shadow: 0px 0px 3px var(--cyan);
    }
    .textLogo {
      border-radius: 20px;
      cursor: pointer;
      padding: 10px; 
      display: flex; 
      transition: 300ms all;
      overflow: hidden;
      :hover {
        background: var(--principalColor);     
        .orange {
          animation: orangeHover 400ms;
        }
        .cyan {
          animation: cyanHover 500ms;
        }
      }
    }
    
    @media(max-width: 489px) {
      z-index: 6;
      top: 5px;
    }
    
    @media (max-width: 380px) {
      transform: scale(0.75, 0.75);
      left: -5px;
    }
  `

  return (
    <Link href='/' passHref>
      <LogoStyled>
        <h1 className='textLogo'>
          <span className='orange'>T</span><span className='cyan'>P</span>
        </h1>
      </LogoStyled>
    </Link>
  )
}

export default Logo