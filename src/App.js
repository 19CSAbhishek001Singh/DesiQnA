import logo from './logo.svg';
import './App.css';
//packages
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//components
import NavBar from './components/NavBar.jsx';
import DesiQna from './components/DesiQna';
import OAPrep from './components/OAPrep';
import DsaPrep from './components/DsaPrep';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<DesiQna />} />
        {/* <Route
          path="/"
          element={<DesiQna />}
          loc="https://www.desiqna.in/"
        /> */}
        <Route path="/oa" element={<OAPrep />} />
        <Route path="/dsa" element={<DsaPrep />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
