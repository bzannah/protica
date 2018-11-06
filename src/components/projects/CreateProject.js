import React, { Component } from 'react';
import createProject from '../../store/actions/projectActions';
import { connect } from 'react-redux';

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSummit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSummit} className="white">
                    <h5 className="grey-text text-darken-3">
                        Create Project
                    </h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" onChange={this.handleChange} className="materialize-textarea"></textarea>
                    </div>
                    <div className="input-field">
                        <button className="waves-effect waves-light btn teal">
                            Create
                        </button>
                    </div>
                </form>
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject);
