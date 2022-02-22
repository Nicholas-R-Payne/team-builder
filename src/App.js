import React, {useState} from 'react';

import Form from './Components/Form'

function App() {
  const {members, setMembers} = useState({ name: '', email: '', role: ''})
  return (
    <div className="App">
      <h1>Team Builder App</h1>
    </div>
  );
}

export default App;
