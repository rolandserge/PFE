import React, { useEffect, useState, useRef } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { v4 } from 'uuid';

const user = v4()

const CodeEditor = ({ plugin }) => {

    const [code, setCode] = useState("function add(a, b) {return a + b;}");
	const [userId, setUserId] = useState()

    useEffect(() => {
        if (plugin) {
            const startListening = async () => {
                plugin.on(`CODE_CHANGE`, (data) => {
                    if(data.user != user) {
                        setCode(data.code)
                    } 
                });
            }
			startListening()
        }
    }, [plugin])

    const handleCodeChange = async (code) => {
        plugin.emit(`CODE_CHANGE`, { code, user })
    }

    return (
        <>
            <CodeMirror
                style={{ fontSize: "32px", textAlign: "left" }}
                value={code}
                onChange={handleCodeChange}
                height="100vh"
                width="100vw"
                theme={'dark'}
                extensions={[javascript({ jsx: true })]}
            />
        </>
    );
}

export default CodeEditor;