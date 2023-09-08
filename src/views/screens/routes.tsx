import { Routes, Route } from 'react-router-dom';
// import Login from './login';
import Main from './main';

export default () => (
  <Routes>
    <Route path="/*" element={<Main />} />
  </Routes>
);
