import React, { useEffect, useMemo, useState } from 'react';
import {
  Container,
  Content, Modal
} from './styles';
import { useHistory} from 'react-router-dom';
import iconUser from '../../assets/images/icons/icon-user.png';
import {dataStorage } from '../../utils/isConnected';
import api from '../../auth/api';
const Home = (props) => {

  let history = useHistory();
  const [dataStoraUser, setdataStoraUser] = useState({});

  useMemo(() => {
   
    if (!dataStoraUser ){
       history.push('/login');
     }

  }, [dataStoraUser, history ]);


  useEffect(()=>{
    setdataStoraUser(dataStorage);
  },[])

  
 const logout = () =>{
    localStorage.removeItem('@user-data');
    localStorage.removeItem('@weser/connected');
     api.signOut();
     history.push('/login');
 }
    
  console.log();
  return (
    <>
      <Container>
        <Content>
          <button  class="logout" onClick={logout}>Sair</button>
          <img src={`${dataStoraUser.avatar !== null ? dataStoraUser.avatar : iconUser}`} alt="avatar" width="50" />

          <Modal className="modal">
            <h4>Conta do Google</h4>
            <span>{dataStoraUser.name !== null ? dataStoraUser.name : 'User Name'}</span>
            <span>{dataStoraUser.email !== null ? dataStoraUser.email : 'User email'}</span>
          </Modal>
        </Content>

      </Container>
    </>

  );
}

export default Home;