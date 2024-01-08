import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import getSession from '../../../state/session/get';
import type { ISession } from 'src/interfaces/models';
import View from './view'
import { Spin } from 'antd';

const mainIndex = () => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getSession()).unwrap().then((session: ISession) => {
      if (!session) {
        navigate('/login')
      }
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <Spin />
    );
  }

  return (
    <View />
  )
}

export default mainIndex;