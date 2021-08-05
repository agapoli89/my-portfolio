//import logo from './logo.svg';
import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";

import LangButton from './LangButton/LangButton';
import Home from './Components/Home/Home';
import TileContent from './Components/Tile/TileContent/TileContent';

import './App.scss';
import './Components/Tile/Tile.scss'

export const LangContext = React.createContext('en');

function App() {
  const [lang, setLang] = useState('pl');
  const handleChangeLang = () => setLang(prev => prev === 'pl' ? 'en' : 'pl')

  return (
    <LangContext.Provider value={{lang}}>
      <div className="App">
        <LangButton lang={lang} handleChangeLang={handleChangeLang}/>
        <Switch>
          <Route path={`/:id`}>
            <TileContent />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </LangContext.Provider>
  );
}

export default App;
