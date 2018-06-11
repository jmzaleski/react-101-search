import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import request from 'superagent';
import './styles/app.css';



class App extends React.Component {
    constructor() {
        super();

        this.state = {
            gifs: []
        }
    }
    handleTermChange(term) {
        //concoct a giphy search URL from term
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;
        request.get(url, (err, res) => {
            this.setState({gifs: res.body.data})
            console.log(term);
        });
    }
    render(){
        //stuff onTermChange property into searchbar equal to handleTermChange function above
        //<SearchBar onTermChange={this.handleTermChange}/>
        //if define onTermChange as a fat arrow function instead of just ref to function this will refer to App.this
        return (
            <div>
                <SearchBar onTermChange={term => this.handleTermChange(term)}/>
                <GifList gifs={this.state.gifs} />

            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
