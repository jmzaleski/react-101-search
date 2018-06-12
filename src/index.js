import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import GifModal from './components/GifModal';
import request from 'superagent';
import './styles/app.css';

class GifModalApp extends React.Component {
    constructor() {
        super();
        this.state = {
            gifs: [],
            selectedGif: null, //gif user has clicked
            modalIsOpen: false
        }
    }
    openModal(gif){
        this.setState({
            modalIsOpen: true,
            selectedGif: gif
        })
        console.log("openModal called, modalIsOpen=" + this.props.modalIsOpen);

    }
    closeModal(){
        this.setState({
            modalIsOpen: false,
            selectedGif: null
        })
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
                <GifList gifs={this.state.gifs}
                         onGifSelect={selectedGif => this.openModal(selectedGif)} />
                <GifModal modalIsOpen={this.state.modalIsOpen}
                          selectedGif={this.state.selectedGif}
                          onRequestClose={ () => this.closeModal() } />
            </div>
        );
    }
}

ReactDOM.render(<GifModalApp />, document.getElementById('gifModalApp'));