import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const Row = props => (
   <tr>
      <td>{props.row.id}</td>
      <td>{props.row.subject}</td>
      <td>{props.row.location}</td>
      <td>{props.row.time}</td>
   </tr>
)

const Header = props => (
   <h1>{props.value}</h1>
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
      return this.state.tutors.map((currentRow, index) => {
         return <Row row={currentRow} key={index} />;
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
               <tbody>
                  { this.rowGenerator() }
               </tbody>
            </Table>
         </div>
      )
   }
}

export default TableComponent;