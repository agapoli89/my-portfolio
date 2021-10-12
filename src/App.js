//import logo from './logo.svg';
import React, { useState } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";

import LangButton from './components/LangButton/LangButton';
import Home from './components/Home/Home';
import TileContent from './components/Tile/TileContent/TileContent';
import { AnimatePresence } from 'framer-motion';

import './App.scss';
import './components/Tile/Tile.scss'

export const LangContext = React.createContext('en');

function App() {
  const location = useLocation();
  const navLang = window.navigator.language.substr(0, 2);
  const [lang, setLang] = useState(navLang);
  const handleChangeLang = () => setLang(prev => prev === 'pl' ? 'en' : 'pl')

  return (
    <LangContext.Provider value={{lang}}>
      <div className="App">
        <LangButton lang={lang} handleChangeLang={handleChangeLang}/>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path={`/:url`}>
              <TileContent />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </LangContext.Provider>
  );
}

export default App;
