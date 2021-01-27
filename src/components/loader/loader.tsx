import React from 'react';
import './loader.scss';

type Props = {
  className?: string
}

export const Loader:React.FC<Props> = ({className = ''}) => (
  <div className={`loader ${className}`}>
    <div className="loadingio-spinner-double-ring-5b8t99tvno">
      <div className="ldio-ea4mi8fe2po">
        <div></div>
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>

  </div>
);
