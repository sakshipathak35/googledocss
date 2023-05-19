import React from 'react';
import { Editor, EditorState } from 'draft-js';
import './TextEditor.css';
import Ruler from './Ruler.js';

class TextEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };

        this.onChange = (editorState) => this.setState({ editorState });
    }

    render() {
        return (
            <>
                <Ruler />
                <div className="text-editor" style={{ width: '600px' }}>
                    <Editor editorState={this.state.editorState} onChange={this.onChange} />
                </div>
            </>
        );
    }
}

export default TextEditor;
