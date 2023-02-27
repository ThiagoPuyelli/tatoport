import styled from "@emotion/styled";

const Alerts = () => {
  const AlertsStyled = styled.div`
    display: flex;
    flex-flow: column wrap;
    position: fixed;
    right: 20px;
    bottom: 20px;
    flex-end
    @media (max-width: 489px) {
      right: 0px !important;
      bottom: 10px !important;
    }
  `
  return (
    <AlertsStyled>
      <div className="alert discord">
        Nombre y tag copiados
      </div>
      <div className="alert mail">
        Correo copiado
      </div>
      <div className="alert form">
          Correo enviado con exito
      </div>
      <div className="alert error">
        Error al enviar el correo
      </div>
    </AlertsStyled>
  )
}

export default Alerts