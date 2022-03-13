import { useState } from 'react';
import './card.scss';

export default function Card({ link }) {
  const [copyButtonText, setCopyButtonText] = useState('Copy');

  function copyLink() {
    const textArea = document.createElement('textarea');

    document.body.appendChild(textArea);
    textArea.value = link.shortLink;
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    setCopyButtonText('Copied!');
  }

  return (
    <div className="short-card">
      <p className="short-card__after">{link.fullLink}</p>
      <p className="short-card__before">{link.shortLink}</p>
      <button className={`short-card__copy${copyButtonText === 'Copied!' ? ' copied' : ''}`} onClick={copyLink}>
        {copyButtonText}
      </button>
    </div>
  );
}
