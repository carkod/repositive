import React from 'react';
import '../styles/App.scss';

interface ITitle {
  text: string
}

function TitleComponent ({text} : ITitle) {
  return <h2 className="b-heading-1">{text}</h2>
}

export default TitleComponent;