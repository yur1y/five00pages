
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Page extends Component {
    handleSubmit = ({page}) => {
        this.props.fetchImages(page);
    };

    render() {
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                    <label htmlFor="page">Enter Page Num</label>
                    <Field
                            component="input"
                            type="text"
                            label="Type Page"
                            name="page"
                            placeholder="Page num..."
                    />
                    <button
                        className="btn waves-effect waves-light"
                        type="submit"
                        name="action"
                    >Enter page</button>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({...actions}, dispatch);
}

export default connect(null, mapDispatchToProps)(reduxForm({
    form: 'pageForm'
})(Page));