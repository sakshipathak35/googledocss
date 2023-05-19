import React from 'react';
import './App.css';
import TextEditor from './TextEditor';
import Toolbar from './Toolbar';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Sidebar />
      <TextEditor />
      {/* You can add your sidebar here */}
    </div>
  );
}

export default App;
