import React from 'react';
import Katex from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';

function MathTextRenderer({ text }) {
  // Split the text at each LaTeX block delimited by $$
  const parts = text.split(/(\$\$.*?\$\$)/);

  return (
    <span>
      {parts.map((part, index) => {
        if (part.startsWith("$$") && part.endsWith("$$")) {
          // Remove the surrounding $$ for proper LaTeX rendering
          const latex = part.slice(2, -2).trim();
          return <Katex key={index} math={latex} inline={true} />;
        } else {
          // Render non-LaTeX text as normal
          return <span key={index}>{part}</span>;
        }
      })}
    </span>
  );
}

export default MathTextRenderer;
