import React, { useEffect, useState } from 'react'
import './styles.scss'
import Copy from '../../images/copy-icon.png'
import emailjs from 'emailjs-com';

const SectionContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [error, setError] = useState({
    name: false,
    email: false,
    notEmail: false,
    message: false
  })
  const [sucessEmail, setSucessEmail] = useState(false)
  const [failedEmail, setFailedEmail] = useState(false)
  const [message, setMessage] = useState('')

  const handleValidation = () => {
    const { name, email, message } = formData;
    const updatedError = {
      name: name.trim() === '',
      email: email.trim() === '',
      notEmail: !(
        email.includes('@') &&
        email.includes('.com') &&
        email.indexOf('@') >= 2 &&
        email.indexOf('.com') >= email.length - 4
      ),
      message: message.trim() === ''
    };

    setError(updatedError);

    const isError = Object.keys(updatedError).find((key)=> updatedError[key] === true)

    return isError ? false : true
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      emailjs.sendForm('service_cosns8l', 'template_cew1a3v', e.target, 'XA7E--q1c0LnWpc6p')
        .then((result) => {
          console.log(result.text);
          setSucessEmail(true)
        }, (error) => {
          console.log(error.text);
          setFailedEmail(true)
        });

      // Limpar o formulário após o envio
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };
  const handleInputFocus = (fieldName) => {
    setError(prevError => ({
      ...prevError,
      [fieldName]: false,
      notEmail: fieldName === 'email' ? false : prevError.notEmail
    }));
  };

  const handleCopy = (string, type) => {
    navigator.clipboard.writeText(string);
    setMessage(type)
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    if (message || failedEmail || sucessEmail) {
      setTimeout(() => {
        setMessage('')
        setFailedEmail(false)
        setSucessEmail(false)
      }, 5000)
    }
  }, [message, sucessEmail, failedEmail])

  return (
    <section>
      {message &&
        <p className='contact__clipboard'>{message} copiado para o clipboard!</p>
      }
      <div className='contact__form-container'>
        <h6>- Contato</h6>
        <h4>Dúvidas? Mande uma mensagem!</h4>
        <p>Caso tenha dúvidas ou queira mais informações, deixe seu contato abaixo ou mande uma mensagem no WhatsApp ou LinkedIn.</p>
        <p>Sinta-se a vontade para entrar em contato em qualquer horário! Retornarei o mais breve possível!</p>

        <div>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => handleChange(e)}
              value={formData.name}
              onFocus={()=>handleInputFocus('name')}
              type="text"
              placeholder='Qual o seu nome?'
              name='name'
              id='name'
              className={error.name ? 'invalid' : ''}
            />
            {error.name &&
              <p>Preciso que me diga seu nome!</p>
            }

            <input
              onChange={(e) => handleChange(e)}
              value={formData.email}
              type="text"
              onFocus={()=>handleInputFocus('email')}
              placeholder='Qual o seu e-mail?'
              name="email"
              id="email"
              className={(error.email || error.notEmail) ? 'invalid' : ''}
            />
            {(error.email || error.notEmail) &&
              (<p>{error.email ? "Preciso que me diga seu e-mail!" : "O e-mail precisa ser válido!"}</p>)
            }

            <textarea
              onChange={(e) => handleChange(e)}
              value={formData.message}
              className={error.message ? 'invalid' : ''}
              placeholder='Me diga, em que posso te ajudar?'
              onFocus={()=>handleInputFocus('message')}
              name="message"
              id="message"
              cols="30"
              rows="3"
            />
            {error.message && 
              <p>Não se acanhe, fale de você...</p>
            }
            <button>{sucessEmail ? 'OBRIGADO! :)': 'ENVIAR'}{failedEmail ? 'TENTE NOVAMENTE :(': ''}</button>
          </form>
        </div>
      </div>
      <div className='contact__more-info-container'>
        <div className='contact__more-info-wrapper'>
          <div className='contact__infos-wrapper'>
            <p>cleyton.mendest@gmail.com</p>
            <button title='Clique para copiar' onClick={(e) => handleCopy('cleyton.mendest@gmail.com', 'Email')}><img src={Copy} alt='copy' /></button>
          </div>
          <div className='contact__infos-wrapper'>
            <p><a title='Clique para discar!' href="tel:21974219271">(21) 97421-9271</a></p>
            <button title='Clique para copiar!' onClick={(e) => handleCopy('(21)974219271', 'Telefone')}><img src={Copy} alt='copy' /></button>
            <a title="Mensagem no WhatsApp" href='https://api.whatsapp.com/send?phone=21974219271&text=Ol%C3%A1!%20Vi%20seu%20portfolio!' target='_blank' rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="15px" height="15px">
                <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z" />
              </svg>
            </a>
          </div>
          <div className='contact__infos-wrapper'>
            <p><a title='Clique para ir ao LinkedIn' href="https://www.linkedin.com/in/cleyton-mendes-199138b5/" target='_blank' rel='noreferrer'>LinkedIn</a></p>
            <button title='Clique para copiar' onClick={(e) => handleCopy('https://www.linkedin.com/in/cleyton-mendes-199138b5/', 'LinkedIn')}><img src={Copy} alt='copy' /></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionContact