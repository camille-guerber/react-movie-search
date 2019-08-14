import React from 'react';

import '../css/app.css'
import Pages from '../components/page-list';

class App extends React.Component {


  render() {
    return (
      <div className="row">
        <div className="col-6 offset-3">
          <h5>Bienvenue sur la page d'accueil.</h5>
          <Pages />
        </div>
      </div>
    )
  }
  
}

export default App;
