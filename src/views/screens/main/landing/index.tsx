import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import createSession from '../../../../../src/state/session/create';
import View from '../../../../../src/views/screens/shared/landing/view';
import type { ISession } from '../../../../../src/interfaces/models';
// const BUILD_TARGET = process.env.REACT_APP_BUILD_TARGET;

export default () => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage ] = useState('');

  const onFinish = async ({ user_name, password }) => {
    setIsLoading(true);
    await dispatch(createSession({
      user_name,
      password,
    })).unwrap().then((session: ISession) => {
      navigate('/');
    }).catch(err => {
      setIsLoading(false);
      setErrorMessage(err.message)
    })
  };

  return (
    <View
      isLoading={isLoading}
      onFinish={onFinish}
      title="Admin"
      errorMessage={errorMessage}
    />

  );
};
