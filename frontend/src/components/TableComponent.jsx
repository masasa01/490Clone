import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const Row = props => (
   <tr>
      <td>props.tutors.id</td>
      <td>props.tutors.subject</td>
      <td>props.tutors.location</td>
      <td>props.tutors.time</td>
   </tr>
)

class TableComponent extends Component {

   constructor(props) {
      super(props);

      this.state = {tutors: []};
   }

   componentDidMount() {
      axios.get('http://localhost:3001/tutorInfo')
         .then(response => {
            this.setState({ tutors: response.data })
         })
         .catch((error) => {
            console.log(error);
         })
   }

   rowGenerator() {
      return this.state.tutors.map(currentRow => {
         return <Row row={currentRow} key={currentRow._id} />
      })
   }
  
     render() {
        return (
           <div>
              <h1>Tutor Information</h1>
              <Table>
                 <thead>
                    <tr>
                       <th>ID</th>
                       <th>Subject</th>
                       <th>Location</th>
                       <th>Time</th>
                    </tr>
                 </thead>
              </Table>
           </div>
        )
     }
}

export default TableComponent;