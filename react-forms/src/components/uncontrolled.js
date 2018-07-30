import React, { Component } from 'react';

class Uncontrolled extends Component {

    state = {

    }

    handleClick = (e) => {
        e.preventDefault();
        const value = {
            name: this.name.value,
            lastname: this.lastName.value
        }
        console.log(value);
    }

    render(){
        return (
            <div className="container">
                <form>
                    <div className="form_element">
                        <label>Enter Name</label>
                        <input
                            type="text"
                            value={this.state.name}
                            ref={input => this.name = input}
                        />
                    </div>
                    <div className="form_element">
                        <label>Enter Last Name</label>
                        <input
                            type="text"
                            value={this.state.lastName}
                            ref={input => this.lastName = input}
                        
                    />
                    </div>
                    <div>
                        <button onClick={this.handleClick.bind(this)}>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Uncontrolled;