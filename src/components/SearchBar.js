import React from 'react';

class SearchBar extends React.Component {
    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }
    render() {
        return (
            <div className="search">
                <input placeholder="enter text to search giffy"
                       onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;