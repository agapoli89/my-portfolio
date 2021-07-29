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
      {/*         <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > 
          Learn React
        </a> */}
    </div>
  );
}

export default App;
