import { useState } from 'react';
import './card.scss';
import { copyTextToClibpoard } from '../../utils/Utils';

export default function Card({ link }) {
  const [copyButtonText, setCopyButtonText] = useState('Copy');

  function copyLink() {
    if (copyTextToClibpoard(link.shortLink)) {
      setCopyButtonText('Copied!');
    }
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
