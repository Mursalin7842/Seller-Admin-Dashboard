import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import SellerManagement from './pages/SellerManagement';
import SellerApproval from './pages/SellerApproval';
import ProductFlagging from './pages/ProductFlagging';
import PaymentManagement from './pages/PaymentManagement';

const Home = () => <h1 className="p-4 text-2xl font-bold">Home Page - Public</h1>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/seller-management" element={<SellerManagement />} />
            <Route path="/seller-approval" element={<SellerApproval />} />
            <Route path="/product-flagging" element={<ProductFlagging />} />
            <Route path="/payment-management" element={<PaymentManagement />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
