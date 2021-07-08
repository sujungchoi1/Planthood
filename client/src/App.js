import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Search from './views/Search';
import Create from './views/Create';
import Main from './views/Main';
import PlantDetail from './views/PlantDetail';

function App() {
  return (
    <div className="App">
     <Router>
       <Main path='/' />
       <Search path="/search"/>
       <Create path="/new" />
       <PlantDetail path="/detail/:id" />
     </Router>
    </div>
  );
}

export default App;
