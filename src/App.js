//import logo from './logo.svg';
import React, { useState } from 'react';

import LangButton from './LangButton/LangButton';
import MainContent from './Components/MainContent/MainContent';

import './App.scss';

export const LangContext = React.createContext('en');

function App() {
  const [lang, setLang] = useState('pl');
  const handleChangeLang = () => setLang(prev => prev === 'pl' ? 'en' : 'pl')

  return (
    <LangContext.Provider value={{lang}}>
      <div className="App">
        <LangButton lang={lang} handleChangeLang={handleChangeLang}/>
        <MainContent />
      </div>
    </LangContext.Provider>
  );
}

export default App;
