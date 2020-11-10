import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function AlertBanner({ className, message, close }) {
  return (
    <div
      className={`${className} text-sm py-1 px-4 my-1 rounded-md flex items-center`}
    >
      <p className="flex-1">{message}</p>
      <button className="p-1" onClick={close}>
        <FontAwesomeIcon icon={faTimes} className="pointer-events-none" />
      </button>
    </div>
  );
}

export default AlertBanner;
