import React, {Component} from 'react';
import Axios from 'axios';

class App extends Component {

  constructor(props) {
      super(props);

      this.getName = this.getName.bind(this);
      this.getID = this.getID.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          form_name: "",
          form_ID: ""
      }
  }

  getName(event) {
    this.setState({
      form_name: event.target.value
    });
  }

  getID(event) {
    this.setState({
      form_ID: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault()
    this.addData(this.state.form_name, this.state.form_ID)
    this.getData();
  }

  getData = () => {
    return fetch("http://localhost:3001/api/get")
    .then(data => data.json())
    .then(res => console.log(res.output))
  };

  addData(aname, anid) {
    Axios.post("http://localhost:3001/api/post", {
      name: aname,
      id: anid
    })
  }

  render() {
      return (
        <div>
          <form onSubmit={this.onSubmit}>
            <input type="text" name="user" value={this.state.form_name} id="" onChange={this.getName}/>
            <input type="text" name="number" value={this.state.form_ID} id="" onChange={this.getID}/>

            <input type="submit" value="Submit"/>
          </form>

        </div>
      )
  }
}

export default App;
