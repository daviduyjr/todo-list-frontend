import { Routes, Route } from 'react-router-dom'
import Dashboard from './dashboard'
// import Brands from './brands';
// import Categories from './categories'
// import Products from './products'

export default () => (
  <Routes>
    <Route path="" element={<Dashboard />} />
    {/*
    <Route path="brands" element={<Brands />} />
    <Route path="categories" element={<Categories />} />
    <Route path="products" element={<Products />} /> */}
  </Routes>
);
