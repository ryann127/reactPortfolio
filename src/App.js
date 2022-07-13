// import logo from './logo.svg';
import './App.css';

import Aboutme from './pages/aboutme';
import Work from './pages/work';
import Resume from './pages/resume';
import Contact from './pages/contact';

import Navbar from './components/navbar';
import Footer from './components/footer';

import {useState} from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('aboutme')
  function renderPage() {
    if(currentPage === "aboutme") {
      return <Aboutme/>
    } else if (currentPage === "work"){
      return <Work/>
    } else if (currentPage === "resume"){
      return <Resume/>
    } else if (currentPage === "contact"){
      return <Contact/>
    }
  }
  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage}/>
      {renderPage()}
      <Footer/>
    </div>
  );
}

export default App;
