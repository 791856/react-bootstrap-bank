
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {configure,shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { Layout } from './components/Layout'
import App from './App'
import { NavigationBar } from './components/NavigationBar';
import {UserDetail} from  './components/UserDetails';



configure({ adapter: new Adapter() });

describe('<App/>',()=>{
  let wrapper,wrapper1;
  const loginView = mount(<App />);
  beforeEach(()=>{
     wrapper=shallow(<App />);
    
  })
  it("contains <Layout/>", () => {
   
    expect(wrapper.find(Layout)).toHaveLength(1);
   
  });

  it("contains <NavigationBar/>", () => {
   
 
    expect(wrapper.find(NavigationBar)).toHaveLength(1);
  });

  it('contains  Router', () => {
   
 
    expect(wrapper.find(Router)).toHaveLength(1);
  });
  it('contains  Route', () => {
   
 
    expect(wrapper.find(Route)).toHaveLength(13);
  });

  it('contains  path="/customerdetails"]', () => {
   
 
   loginView.find(Route).find('[path="/customerdetails"]').debug()
  });
  
})


