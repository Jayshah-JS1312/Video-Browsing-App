import React from "react"

class SearchBar extends React.Component{

    constructor() {
        super();
        this.state = {
            term:''
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleInput(event) {
        this.setState({ term:event.target.value })
    }

    handleFormSubmit(event) {
        event.preventDefault()
        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return(
            <div className="search-bar ui segment" style={{ backgroundColor:'black' }}>
                <form className="ui form" onSubmit={this.handleFormSubmit}>
                    <div className="field">
                        <label style={{ color:'white',fontFamily:'sans-serif',fontSize:'20px' }}>Search for your favourite video here!!</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.handleInput}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar