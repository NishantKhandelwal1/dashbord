import React, { Component } from 'react';
import './App.css';
import { Col, Row, Grid, FormGroup, FormControl, Button } from 'react-bootstrap';
import Navbar from './component/Navbar';
import jsonQ from 'jsonq';


var numbers = null;
var userDetail = null;

class App extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      data: null,
      loading: false
    }

  }

  componentWillMount() {
    fetch('http://dev.impactrun.com/api/leagueleaderboard/?impactleague=7', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic bmlra2k6Z3JlZW5mcmVlZG9tIQ=='
      }
    })
      .then((Response) => Response.json())
      .then((responseJson) => {
        numbers = responseJson;
        console.log("NUmbers", numbers);

        this.setState({

          data: responseJson,
          loading:true,
        })
        numbers = this.state.data;

        // var personObj = jsonQ(this.state.data.results);
        // personObj = personObj.find('id', function () {
        //   console.log("THIS", this);
        //   return this == 1414;
        // }).parent();
        // personObj.each(function (index, path, value) {
        //   console.log(value.company + '  ' + value.user.first_name);
        // });

      });



  }
  handleSubmit(props) {


  }




  renderProfile(a) {
    console.log("Profile Rendered", a.target.value);
    console.log("bbfvbhb", numbers);
    if (numbers !== null) {
      var personObj = jsonQ(numbers);
      personObj = personObj.find('id', function () {
        return this === a.target.value;
      }).parent();
      personObj.each(function (index, path, value) {
        console.log(value.company + '  ' + value.user.first_name);
        userDetail = value;

      });
      console.log("USERDETAIL", userDetail);

    }

  }

  // const numbers = [1, 2, 3, 4, 5];

  render() {
    var users = this.state.data;

    if (this.state.data !== null) {

      var userList = this.state.data.results.map((number, index) => {
        return (<li key={index} value={number.id} onClick={this.renderProfile}>{number.user.user_id + '  ' + number.user.first_name + ' ' + number.user.last_name}</li>);
      });




    }
    if(this.state.loading){
      return (
        <div className='container-fluid'>
          <Navbar />
          <div className="container">
            <Grid>
              <Row className="show-grid">
                <Col xs={6} md={4}>
                  <Row>
                    <div className="navbar-form">
                      <FormGroup>
                        <FormControl type="text" placeholder="Search" />
                      </FormGroup>
                      {' '}
                      <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
                    </div>
                    <div className="user-list">
                      <ul>
                      {userList}
                      </ul>
                    </div>

                  </Row>

                </Col>
                <Col xs={6} md={4}>
                  <div>
                    <h2>
                  { }
                    </h2>
                  </div>
                </Col>
                <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
              </Row>
            </Grid>
          </div>
        </div>
      );
    }
    else{
      return(
        <h1>Loading...</h1>
      )
    }

  }
  // else {
  //   return (
  //     <h1>Loading...</h1>
  //   )
  //}

  //}
}


export default App;
