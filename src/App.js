import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';



class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    active: true
  }
}


render() {
    return (
      <>
        <Navbar transactionTab = {this.transactionTab} />
      </>

        
    )
  }
}

export default App;
