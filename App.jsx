// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import OwnerLogin from './pages/OwnerLogin';
import CustomerLogin from './pages/CustomerLogin';
import AddProperty from './pages/AddProperty';
import OwnerDashboard from './pages/OwnerDashboard';
import BrowseProperties from './pages/BrowseProperties';
import Contact from './pages/Contact';
import About from './pages/About';
import './css/Styles.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/owner-login" element={<OwnerLogin />} />
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/owner-dashboard" element={<OwnerDashboard />} />
        <Route path="/browse-properties" element={<BrowseProperties />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
