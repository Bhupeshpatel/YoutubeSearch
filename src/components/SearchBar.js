import React from 'react';


export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.state = {
            term: ''
        }
    }

    onInputChange(value) {
        this.setState({
            term: value
        });
        this.props.onSearchTermChange(value);
    }

    render(){
        return (
          <div className="search-bar">
            <input
                onChange={event => this.onInputChange(event.target.value)}
                value={this.state.term}/>
          </div>
        );
    }
};

export default SearchBar;