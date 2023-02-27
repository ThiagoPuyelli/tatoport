import styled from "@emotion/styled";
import emailjs from '@emailjs/browser'
import showAlert from "../utils/showAlert";

const Contact = () => {
  const ContactStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding-left: 100px;
    padding-top: 70px;
    .contentForm {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      width: 500px;
      border-radius: 10px;
      background: var(--secondaryColor);
      border: 3px solid var(--green);
      box-shadow: 0px 0px 3px var(--green);
      padding: 20px;
      margin-bottom: 50px;
      .titleContact {
        font-size: 40px;
        font-family: russo;
        font-weight: normal;
        letter-spacing: 2px;
        .green {
          font-size: 55px;
          color: var(--green);
          text-shadow: 0px 0px 3px var(--green);
        }
      }
      .formContact {
        display: flex;
        width: 100%;
        flex-flow: column wrap;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        * {
          width: 100%;
          margin-top: 30px;
          padding: 10px;
          font-family: russo;
          font-weight: normal;
        }
        .inputForm,
        .areaForm {
          background: transparent;
          border: none;
          border-bottom: 2px solid rgba(53, 179, 97, 0.5);
          font-size: 15px;
        }
        .areaForm {
          height: 180px;
        }
        .buttonForm {
          cursor: pointer;
          background: rgba(53, 179, 97, 0.5);
          border: 2px solid var(--green);
          border-radius: 10px;
          transition: 300ms all;
          
          font-size: 17px;
          letter-spacing: 1px;
          :hover {
            background: rgba(53, 179, 97, 0.1);
          }
        }
      }
    } 

    @media (max-width: 632px) {
      .contentForm {
        background: transparent;
        border: none;
        box-shadow: none;
      }
      .inputForm,
      .areaForm {
        border-bottom: 2px solid var(--green) !important;
      }
      .titleContact {
        text-align: center;
      }
    }

    @media (max-width: 489px) {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 100px;
      margin-top: 60px;
      .contentForm {
        padding: 0px;
      }
      * {
        width: 100% !important;
      }
    }
  `

  const sendForm = async (e: SubmitEvent) => {
    const name: HTMLInputElement|null = document.querySelector(".inputForm.name")
    const email: HTMLInputElement|null = document.querySelector(".inputForm.email")
    const phone: HTMLInputElement|null = document.querySelector(".inputForm.phone")
    const description: HTMLInputElement|null = document.querySelector(".areaForm")
    e.preventDefault()
    if (name && email && phone && description) {
      if (name.value !== '' || email.value !== '' || phone.value !== '' || description.value !== '' ) {
        const form: HTMLFormElement|null = document.querySelector('.formContact')
        if (form) {
          const button: HTMLElement|null = document.querySelector('.buttonForm')
          if (button) {
            button.style.opacity = '0.5'
            button.setAttribute('disabled', '')
          }
          const emailReq = await emailjs.sendForm('service_92j0jdb', 'template_wcvnqmj', form, '6uwnNP52tSRvZtLBO')
          if (emailReq.text === 'OK') {
            name.value = ''
            email.value = ''
            phone.value = ''
            description.value = ''
            const alert: HTMLElement|null = document.querySelector('.alert.form')
            showAlert(alert)    
            if (button) {
              button.style.opacity = '1'
              button.removeAttribute('disabled')
            }
            return 0;
          } else {
            if (button) {
              button.style.opacity = '1'
              button.removeAttribute('disabled')
            }
          }
        }
      }
    }
    const alert: HTMLElement|null = document.querySelector('.alert.error')
    showAlert(alert)
  }

  return (
    <ContactStyled>
      <div className="contentForm">
        <h1 className='titleContact'>
          <span className='green'>E</span>nvía<span className='green'> t</span>u <span className='green'> m</span>ensaje
        </h1>
        <form className='formContact' onSubmit={(e: any) => sendForm(e)}>
          <input className='inputForm name' type="text" name='name' placeholder='Nombre' />
          <input className='inputForm email' type="email" name='email' placeholder='Correo' />
          <input className='inputForm phone' type="text" name='phone' placeholder='Teléfono' />
          <textarea name="description" className='areaForm' placeholder='Mensaje'></textarea>
          <input type="submit" value='Enviar' className='buttonForm' />
        </form>
      </div>
    </ContactStyled>
  )
}

export default Contact