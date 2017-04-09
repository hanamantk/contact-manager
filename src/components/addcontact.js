/*
  @Author       : hanamant k
  component     : AddContact
  Description   : adds new contact or user profile to store
                  also handles user profile update
*/

import React, { Component} from 'react';
import {Header}           from './home';
import {Link}             from 'react-router';
import { browserHistory } from 'react-router';
import {connect}          from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions       from '../actions/index';

class AddContact extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
                name      :'',
                email     :'',
                tel       :'',
                id        : '',
                update    : false
    };

    this._onSubmit    = this._onSubmit.bind(this);
    this.nameChange   = this.nameChange.bind(this);
    this.emailChange  = this.emailChange.bind(this);
    this.telChange    = this.telChange.bind(this);      
  }

componentDidMount(){

if(this.props.location.pathname=='/UpdateContact'){
  var update_id=parseInt(this.props.location.query.id,10);

  var uprofile=this.props.data.filter((profile)=>{ //get specific profile for edit
     return profile.id===update_id;
        
  });

  this.setState({
              name         : uprofile[0].name,   //get edited fields into state
              tel          : uprofile[0].tel,
              email        : uprofile[0].email,
              update       : true,
              update_id    : update_id,
              contactStaus : 'Edit Contact'
  })

}else{

  this.setState({contactStaus:'Create Contact'});
}
    
}

_onSubmit(e){

   e.preventDefault();

   var profile  ={};
  
  profile.id    =(this.state.update===true)?this.state.update_id:Math.floor(Math.random() * 15);
  profile.name  =this.state.name;
  profile.tel   =this.state.tel;
  profile.email =this.state.email;

  if(this.state.update===true){
  this.props.actions.updateContact(profile);
  }else{
    this.props.actions.addContact(profile);
 }

  browserHistory.push('');
  
}

nameChange(e){
  this.setState({name: e.target.value});
}

emailChange(e){
  this.setState({email: e.target.value});
}

telChange(e){
  this.setState({tel: e.target.value});
}

  render() {
     
      return (<div>
               <Header/>
               <h2>{this.state.contactStaus}jk</h2>
               
               <form className="myform" ref='user_form' onSubmit={this._onSubmit}>
                  <div className="row">
                  <div className="col-sm-4"></div>
                    <div className="form-group col-sm-5">
                    <input type="text" className="form-control" id="name" onChange={this.nameChange} value={this.state.name} placeholder="Enter your name"/>
                  </div>
                  </div>

                   <div className="row">
                  <div className="col-sm-4"></div>
                    <div className="form-group col-sm-5">
                    <input type="email" className="form-control" id="name" onChange={this.emailChange} value={this.state.email} placeholder="Enter your Email "/>
                  </div>
                  </div>

                   <div className="row">
                  <div className="col-sm-4"></div>
                    <div className="form-group col-sm-5">
                    <input type="text" className="form-control" id="name" onChange={this.telChange} value={this.state.tel} placeholder="Enter phone number"/>
                  </div>
                  </div>
                  <div className="row">
                  <div className="col-sm-4"></div>
                      <div className="col-sm-offset-4 col-sm-3">
                       
                       <button type="submit"  className="btn btn-outline btn-lg btn-block">Submit</button>
                      
                      </div>

                      <div className="col-sm-offset-4 col-sm-3">
                       
                        <button type="submit" className="btn btn-outline btn-lg btn-block">cancel</button>
                      
                      </div>
                   </div>
              </form>
              </div>
    );
  }
}


function mapStateToProps(state, props) {
  return {
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);


