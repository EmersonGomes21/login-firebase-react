import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../auth/api';
import xIcon from '../../assets/images/icons/x.svg';
import IconGoogle from '../../assets/images/icons/google-icon.png';
import { Container } from './styles';
import {dataStorage, isConnected} from '../../utils/isConnected'
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ onReceiveGoogle }) => {

  //definem valores dos inputs através do Onchange
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('');

  //definem quando os inputs estão com focus
  const [userClassFocus, setUserClassFocus] = useState('desfocado');
  const [passwordClassFocus, setPasswordClassFocus] = useState('desfocado');

  //definem quando os campos dos usúarios estão em brancos
  // const [erroUser, setErrorUser] = useState(false);
  // const [erroPassword, setErrorPassword] = useState(false)


  //usado para exibir a mensagem de conexão realizada com sucesso
  const [connectionSuccessful, setConnectionSuccessful] = useState(false);

  //usado para setar o estado do erro após ter criado a conexão no localStorage
  const [error, setError] = useState(false);

  //redireciona
  let history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    let result = await api.emailSenhaLogar(user, password);
    console.log('rsult email', result);
    // // função que verifica se dentro do array users existe os dados equivalentes aos dos values do form
    // const isAuthenticated = users.some(data => data.user === user && data.password === password);

    if (result) {
      setConnectionSuccessful(true);
      setError(false);
      

    } else {
      setError(true);
      setConnectionSuccessful(false);

    }

  }

  const actionLoginGoogle = async (e) => {
    e.preventDefault();
    let result = await api.googleLogar();

    if (result.additionalUserInfo.profile.verified_email) {
      onReceiveGoogle(result.user);
    }
    else {
      alert('Error ao logar, tente novamente');
     
    }
  }

  return (
    <Container>
      <div className="container">
        <div className="col background-login">

          <di className="background-img">

          </di>
        </div>

        <div className="col main">

          <div className="content">
            <div className="heading-container">
              <p className="heading-title">Olá, seja <br /> bem-vindo!</p>
              <p className="heading-subtitle">
                Para acessar a plataforma,
              <br className="br" /> faça seu login.
            </p>
            </div>

            <div className="form-container">
              <form>

                <div className="input-container">
                  <div className={`input-group ${error ? 'input-top' : ''} ${userClassFocus}`}>
                    <label className="input-title">E-MAIL</label>
                    <img src={xIcon} alt="icon x" className={` ${error ? 'iconx' : 'hide'
                      }`} />
                    <input
                      className={`${error ? 'error' : ''}`}
                      required
                      type="email"
                      value={user}
                      placeholder="user.name@mail.com"
                      onBlur={() => setUserClassFocus(!user ? 'desfocado' : 'focado')}
                      onFocus={() => {
                        // setErrorUser(false)
                        setUserClassFocus('focado')
                      }}

                      onChange={e => setUser(e.target.value)} />

                    {error ? <span className="text-error erro-email">Digite um e-mail válido;</span>

                      : ''

                    }


                  </div>

                  <div className={`input-group ${error ? 'input-top' : ''} ${passwordClassFocus}`}>
                    <label className="input-title">Senha</label>
                    <input
                      className={`${error ? 'error' : ''}`}
                      required
                      type="password"
                      value={password}
                      placeholder="*******"
                      onBlur={() => setPasswordClassFocus(!password ? 'desfocado' : 'focado')}
                      onFocus={() => {
                        // setErrorPassword(false)
                        setPasswordClassFocus('focado')
                      }}
                      onChange={e => setPassword(e.target.value)} />

                  </div>
                </div>
                {
                  connectionSuccessful ? (
                    <p className="text-success">
                      Login efetuado com sucesso. <br />
                  Aguarde o redirecionamento!
                    </p>
                  )
                    : ""}

                <div className="mobile-layout">
                  <button onClick={submit} type="submit" className="btn-primary" >
                    ENTRAR
              </button>

                  <div className="social-logins">
                    <a href="" onClick={actionLoginGoogle} className="login-google"> <img src={IconGoogle} width="20" alt="social icon" />Google</a>

                    <a href="" className="login-facebook disable"> <img src="https://imagepng.org/wp-content/uploads/2017/09/facebook-icone-icon.png" width="20" alt="social icon" />Facebook</a>

                  </div>
                  <p className="recovery">Esqueceu seu login ou senha? <br />
               Clique <a href="">aqui</a>
                  </p>
                </div>
              </form>

            </div>

          </div>

        </div>


      </div>
    </Container>




  )
}



  ;
