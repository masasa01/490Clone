import React, {Component} from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar.jsx';
import TableComponent from './components/TableComponent.jsx';
import About from './components/About.jsx';



class App extends Component {

  render() {
      return (
        <div>
          <NavBar />
          <About />
          <TableComponent />

        </div>
      )
  }
}

export default App;
