import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './Login';
import { Register } from './Register';
import { Apply } from './Apply';
import { Deposit } from './Deposit';
import {Loan} from './Loan';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout'
import {personal} from './components/PersonalLoan';
import { NavigationBar } from './components/NavigationBar'
import {Sucess} from  './components/Sucess'


import './App.css';
import { Education } from './EducationLoan';


function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
           
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route path="/apply" component={Apply} />
            <Route path="/deposit" component={Deposit} />
            <Route path="/register" component={Register} />
            <Route path="/loan" component= {Loan} />  
            <Route path="/educational" component= {Education} />  
            <Route path="/personal" component= {personal} />  
            <Route path="/sucess" component= {Sucess} />  


            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}
export default App;
