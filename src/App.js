import logo from './logo.svg';
import './App.css';
//packages
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//components
import NavBar from './components/NavBar.jsx';
import OAPrep from './components/OAPrep';
import DsaPrep from './components/DsaPrep/DsaPrep';
import Post from './components/DsaPrep/Posts/Post';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <a href='https://www.desiqna.in/'>DesiQnA</a> */}
      <Routes>
        <Route path="/oa" element={<OAPrep />} />
        <Route path="/dsa" element={<DsaPrep />} />
        {/* <Route path="/dsaArray" element={<Post />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
