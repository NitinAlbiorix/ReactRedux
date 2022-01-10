import React from 'react';
import Hooks from './Components/hooks';
import ForwardCounter from './Components/forwardcounter';
import BackwordCounter from './Components/BackwordCountr';

function App() {  
  return (
  <React.Fragment>
    <Hooks/>
    <ForwardCounter/>
    <BackwordCounter/>
  </React.Fragment>
  );
}

export default App;
