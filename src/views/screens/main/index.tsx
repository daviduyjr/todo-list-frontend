import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import getSession from '../../../state/session/get';
// import type { ISession } from 'src/interfaces/models';
import View from './view'

const mainIndex = () => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // dispatch(getSession()).unwrap().then((session: ISession) => {
    //   if (!session) {
    //     navigate('/login')
    //   }
    // });
  }, []);

  return (
    <View />
  )
}

export default mainIndex;