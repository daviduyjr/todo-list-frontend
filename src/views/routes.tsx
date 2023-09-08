import { Routes, Route } from 'react-router-dom';
import Main from './screens/main';

const route = () => (
  <Routes>
    <Route path="/*" element={<Main />} />
  </Routes>
);

export default route;