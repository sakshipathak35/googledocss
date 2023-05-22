import React from 'react';
import { EditorState } from 'draft-js';
import './App.css';
import TextEditor from './TextEditor';
import CustomToolbar from './Toolbar';
import Sidebar from './Sidebar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };

    this.onChange = (editorState) => this.setState({ editorState });
    this.handleUndo = this.handleUndo.bind(this);
    this.handleRedo = this.handleRedo.bind(this);
  }

  handleUndo() {
    this.setState(({ editorState }) => ({
      editorState: EditorState.undo(editorState)
    }));
  }

  handleRedo() {
    this.setState(({ editorState }) => ({
      editorState: EditorState.redo(editorState)
    }));
  }

  render() {
    return (
      <div className="App">
        <CustomToolbar
          onUndo={this.handleUndo}
          onRedo={this.handleRedo}
        />
        <div className="content-wrapper">
          <Sidebar />
          <TextEditor editorState={this.state.editorState} onChange={this.onChange} />
        </div>
      </div>
    );
  }
}

export default App;
