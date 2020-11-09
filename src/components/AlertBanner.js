import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function AlertBanner({ className, message }) {
  return (
    <div
      className={`${className} text-sm py-2 px-4 rounded-md flex items-center`}
    >
      <p className="flex-1">{message}</p>
      <button className="p-1">
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
}

export default AlertBanner;
