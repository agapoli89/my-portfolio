//import logo from './logo.svg';
import { useState } from 'react';

import LangButton from './LangButton/LangButton';
import MainContent from './Components/MainContent/MainContent';

import './App.scss';


function App() {
  const [lang, setLang] = useState('PL');

  const handleChangeLang = () => setLang(prev => prev === 'PL' ? 'EN' : 'PL')

  return (
    <div className="App">
      <LangButton lang={lang} handleChangeLang={handleChangeLang}/>
      <MainContent lang={lang}/>
    </div>
  );
}

export default App;
