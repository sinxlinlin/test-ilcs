import React from 'react';

function Loading() {
  return (
    <div
      className="text-center center-img d-flex align-items-center justify-content-center"
      style={{ height: '50vh' }}
    >
      <img className="img" src={`${process.env.PUBLIC_URL}/dist/img/preloader.gif`} alt="Logo" />
    </div>
  );
}

export default Loading;
