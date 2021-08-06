//import logo from './logo.svg';
import React, { useState } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";

import LangButton from './LangButton/LangButton';
import Home from './Components/Home/Home';
import TileContent from './Components/Tile/TileContent/TileContent';
import { AnimatePresence } from 'framer-motion';

import './App.scss';
import './Components/Tile/Tile.scss'

export const LangContext = React.createContext('en');

function App() {
  const location = useLocation();
  const [lang, setLang] = useState('pl');
  const handleChangeLang = () => setLang(prev => prev === 'pl' ? 'en' : 'pl')

  return (
    <LangContext.Provider value={{lang}}>
      <div className="App">
        <LangButton lang={lang} handleChangeLang={handleChangeLang}/>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route path={`/:id`}>
              <TileContent />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </LangContext.Provider>
  );
}

export default App;
