import React from 'react'

import './App.css'

import CollapseMain from "./components/CollapseMain.tsx";
import CollapseHeader from "./components/CollapseHeader.tsx";

const App: React.FC = () => {
  return (
    <div className="App">
        <CollapseHeader/>
        <CollapseMain/>
    </div>
  )
}

export default App
