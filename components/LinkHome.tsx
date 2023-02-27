import styled from "@emotion/styled";

const LinkHome = ({content, color}: {content: string, color: string}) => {
  const LinkHomeStyled = styled.div`
    display: block;
    padding: 10px;
    text-align: center;
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    text-shadow: 0px 0px 15px ${color};
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    transition: 0.5s;
    padding: 16px 30px;
    font-size: 1.5rem;
    color: ${color};
    span {
      position: absolute;
      background: ${color};
      z-index: -1;
      box-shadow: 0 0 10px ${color},
          0 0 20px ${color},
          0 0 30px ${color},
          0 0 50px ${color},
          0 0 100px ${color};
      transition: 0.5s ease-in-out;
    }
    .span1,
    .span3 {
      width: 40px;
      height: 4px;
    }
    .span2,
    .span4 {
      width: 4px;
      height: 40px;
    }
    .span1 {
      margin-left: -90px;
      margin-top: 14px;
    }
    .span2 {
      margin-top: -83px;
      margin-left: ${content === 'sobre mi' ? 58 : content === 'Proyectos' ? 75 : 70}px;
    }
    .span3 {
      margin-left: ${content === 'sobre mi' ? 172 : content === 'Proyectos' ? 204 : 197}px;
      margin-top: 14px;
    }
    .span4 {
      margin-top: 80px;
      margin-left: ${content === 'sobre mi' ? 58 : content === 'Proyectos' ? 75 : 70}px;
    }
    :hover {
      color: #fff;
      border: 2px solid rgba(0, 0, 0, 0);
      box-shadow: 0 0 0px ${color};
      :before {
        transform: scale(1);
        transition-delay: 0.5s;
        box-shadow: 0 0 10px ${color},
          0 0 30px ${color},
          0 0 60px ${color};
      }
      span {
        opacity: 0;
      }
      .span1 {
        margin-left: 60px;
      }
      .span2 {
        margin-top: 0px;
      }
      .span3 {
        margin-left: 0px;
      }
      .span4 {
        margin-top: 0px;
      }
    }
    :before {
      content: '';
      position: absolute;
      width: ${content === 'sobre mi' ? 183 : content === 'Proyectos' ? 215 : 208}px;
      height: 70px;
      margin-top: -18px;
      background: ${color};
      z-index: -1;
      transform: scale(0);
      transition: 0.5s;
      margin-left: -31px;
    }
  `

  return (
    <LinkHomeStyled>
        <span className='span1'></span>
        <span className='span2'></span>
        <span className='span3'></span>
        <span className='span4'></span>
        {content}      
    </LinkHomeStyled>
  )
}

export default LinkHome