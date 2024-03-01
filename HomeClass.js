import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HomeClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            College:'MKCE',
            Department:'CSE'
        }
    }
    changeDepartment= () => {
        this.setState({Department:'AIML'})
    }

   

    render() {
        return (
            <div>
                <h4>College Name:{this.state.College}</h4>
                <h4>Department Name:{this.state.Department}</h4>
                <button onClick={this.changeDepartment}>Change Department</button>

            </div>
        );
    }
}

HomeClass.propTypes = {

};

export default HomeClass;