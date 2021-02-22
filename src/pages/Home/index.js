import React, { useMemo, useState } from 'react';
import {
  Container,
  Content, Modal
} from './styles';

import iconUser from '../../assets/images/icons/icon-user.png';
import { dataStorage } from '../../utils/isConnected';
const Home = (props) => {

  const [dataStoraUser, setdataStoraUser] = useState({});

  useMemo(() => {
    setdataStoraUser(dataStorage);
  }, [])

  console.log();
  return (
    <>
      <Container>
        <Content>
          <i class="fa fa-sign-out" aria-hidden="true"></i>
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