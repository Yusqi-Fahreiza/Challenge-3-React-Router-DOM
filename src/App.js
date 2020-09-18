import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Beranda</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/protokol">Protokol</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/data">Data</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/biodata">Biodata</Link> 
              </li>
            </ul>
          </div>
        </nav>
        <p><Utama /></p>
      </div>
    );
  }
}

export default App;
