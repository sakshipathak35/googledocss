import React from 'react';
import { Editor } from 'draft-js';
import './TextEditor.css';
import Ruler from './Ruler.js';

class TextEditor extends React.Component {
    constructor(props) {
        super(props);
        this.setEditor = (editor) => {
            this.editor = editor;
        };
        this.focusEditor = () => {
            if (this.editor) {
                this.editor.focus();
            }
        };
    }

    componentDidMount() {
        this.focusEditor();
    }

    render() {
        return (
            <div style={{ position: 'relative' }}>
                <Ruler />
                <div className="text-editor" style={{ width: '600px', marginTop: '50px' }}>
                    <Editor
                        editorState={this.props.editorState}
                        onChange={this.props.onChange}
                        ref={this.setEditor}
                    />
                </div>
            </div>
        );
    }
}

export default TextEditor;
