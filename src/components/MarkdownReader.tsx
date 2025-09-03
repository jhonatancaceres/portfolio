import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface MarkdownReaderProps {
  filePath: string;
}

const MarkdownReader: React.FC<MarkdownReaderProps> = ({ filePath }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(text => {
        setMarkdown(text);
      })
      .catch(error => {
        console.error('Error fetching the markdown file:', error);
        setMarkdown('Error loading content.');
      });
  }, [filePath]); // Dependency array ensures the effect runs when filePath changes

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
      {markdown}
    </ReactMarkdown>
  );
};

export default MarkdownReader;