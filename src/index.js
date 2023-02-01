import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header';
import Footer from './footer';
import Maincontent from './maincontent';

function Page() {
  // First letter of componet should be capital.
  return (
    <div>
      <Header />
      <div >
        <Maincontent />
      </div>
      <Footer />
    </div>
  );
}
ReactDOM.render(<Page />, document.getElementById('root'));
