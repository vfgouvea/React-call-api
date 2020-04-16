import React from 'react';
import './App.css';
import Contacts from './Components/contacts';

class App extends React.Component {

  state = {
     contacts: []
  }

   componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
            this.setState({ contacts: data })
        }).catch(console.log)
   }

  render() {
     return (
        <Contacts contacts={this.state.contacts} />
     )
  }
}

export default App;
