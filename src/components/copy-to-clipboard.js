import React, { useState } from 'react';

const CopyToClipboard = ({ text }) => {
  const [buttonText, setButtonText] = useState('Copy');
  const [buttonClass, setButtonClass] = useState('btn btn-secondary');

  function copyToClipboard(e) {
    navigator.clipboard.writeText(text).then(
      function() {
        setButtonText('Copied!');
        setButtonClass('btn btn-light');
        setTimeout(() => {
          setButtonText('Copy');
          setButtonClass('btn btn-secondary');
        }, 3000);
      },
      function() {
        /* clipboard write failed */
      },
    );
  }

  return (
    <div>
      {text}
      {/* Logical shortcut for only displaying the 
          button if the copy command exists */
      typeof window !== 'undefined' && document.queryCommandSupported('copy') && (
        <button type="button" class={buttonClass} onClick={copyToClipboard}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default CopyToClipboard;
