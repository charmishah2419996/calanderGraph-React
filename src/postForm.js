import React, { Component } from 'react';

import axios from 'axios';

class postForm extends Component{

    constructor()
    {
        super();
        this.state={
          first_name: '',
          job: ''
        }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]:e.target.value});

  }
  submitHandler = e =>{
    e.preventDefault();
    console.log(this.state);
    axios.post('https://reqres.in/api/users',this.state)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }


   render() {

    const{first_name,job} = this.state;

       return(
            <div>
              <form onSubmit={this.submitHandler}>
                  <input type="text" placeholder="Enter name" name="first_name" value={first_name} onChange={this.changeHandler}/>
                  <input type="text" placeholder="Enter job" name="job" value={job}  onChange={this.changeHandler}/>
                  <button type="submit">add</button>
                </form>
              <button type="submit"></button>
            </div>
       );
   }

}




export default postForm;
