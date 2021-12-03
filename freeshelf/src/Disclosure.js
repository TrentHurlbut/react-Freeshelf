import { useState } from 'react';
import FullInfo from './FullInfo';

export default function Disclosure({ url, publisher, pubDate, fullText }) {

  const [expanded, setExpanded] = useState(false)

  return (
    <div className="disclosure">
      {expanded ? (
        <div>
          <button
            className="btn-sm controls"
            onClick={() => setExpanded(false)}
          >
          Less Info
          </button>
          <FullInfo url={url} publisher={publisher} pubDate={pubDate} fullText={fullText} />
        </div>
      ) : (
        <button className="btn-sm controls" onClick={() => setExpanded(true)}>
          More Info
        </button>
      )}
    </div>
  )
}