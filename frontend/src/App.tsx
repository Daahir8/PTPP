import { useState } from 'react';
import Header from './components/Header';
import Countdown from './components/Countdown';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home');

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {currentPage === 'home' ? <Countdown /> : <Contact />}
      </main>
    </div>
  );
}

export default App;
