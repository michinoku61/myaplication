import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Main />
        <Footer />
      </div>
    );
  }
}






ReactDOM.render(<App />, document.getElementById('root'));
