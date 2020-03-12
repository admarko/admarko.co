import React from 'react';
import Footer from './Footer';
import Header from './Header';

import './__styles__/About.scss';

export default function About() {
  return (
    <div>
      <Header />
      <div>
        <h1>About me </h1>
      </div>
      <div className="mainContent">
        <div>img</div>
        <div>content </div>
      </div>
      <Footer />
    </div>
  );
}
