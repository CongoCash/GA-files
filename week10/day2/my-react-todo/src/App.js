import React, { Component } from 'react';
import Header from './components/Header'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello, and welcome! I am a heading tag in App.js! Have a great day!</h1>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default App;