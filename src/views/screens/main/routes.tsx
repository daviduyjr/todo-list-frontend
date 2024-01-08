import { Routes, Route } from 'react-router-dom'
import Dashboard from './dashboard'
import Landing from './landing'

export default () => (
  <Routes>
    <Route path="/login" element={<Landing />} />
    <Route path="" element={<Dashboard />} />
  </Routes>
);
