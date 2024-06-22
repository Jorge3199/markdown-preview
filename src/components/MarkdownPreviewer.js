"use client";

import React, { useState } from 'react';
import { marked } from 'marked';
import { saveAs } from 'file-saver';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { github, vs, atomOneDark, dracula, solarizedLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const themes = {
  github,
  vs,
  atomOneDark,
  dracula,
  solarizedLight
};

const options = [
  { description: 'Github', value: 'github' },
  { description: 'VS Code', value: 'vs' },
  { description: 'Atom One Dark', value: 'atomOneDark' },
  { description: 'Dracula', value: 'dracula' },
  { description: 'Solarized Light', value: 'solarizedLight' }
];

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState('# Hola Mundo');
  const [theme, setTheme] = useState('github');

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleExport = () => {
    const htmlContent = marked(markdown);
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    saveAs(blob, 'markdown-preview.html');
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 20px' }}>
        <select onChange={handleThemeChange} value={theme}>
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.description}</option>
          ))}
        </select>
        <button onClick={handleExport} className="export-button">Export HTML</button>
      </div>
      <div style={{ display: 'flex', padding: '20px' }}>
        <textarea
          style={{ width: '50%', height: '90vh', padding: '10px', fontSize: '16px' }}
          value={markdown}
          onChange={handleMarkdownChange}
        />
        <div
          style={{
            width: '50%',
             height: '90vh',
             paddingLeft: '10px',
            border: '1px solid #ddd',
            overflowY: 'auto'
          }}
        >
          <SyntaxHighlighter style={themes[theme]} language="markdown">
            {markdown}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default MarkdownPreviewer;