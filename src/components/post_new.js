import React, { Component } from  'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostNew extends Component {
    render () {

        const { fields: {title, categories,content}, handleSubmit } = this.props;
        return (
            <form onSubmit={ handleSubmit(this.props.createPost) }>
                <h3>Create A New Post</h3>
                <div className = {`form-group ${title.touched && title.invalid ? 'has-danger' : '' }`}>
                    <lable>Title</lable>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">{title.touched ? title.error : ''}</div>
                </div>

                <div className = {`form-group ${categories.touched && categories.invalid ? 'has-danger' : '' }`}>
                    <lable>Categories</lable>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">{categories.touched ? categories.error : ''}</div>
                </div>

                <div className = {`form-group ${content.touched && content.invalid ? 'has-danger' : '' }`}>
                    <lable>Content</lable>
                    <textarea className = "form-control" {...content} />
                    <div className="text-help">{content.touched ? content.error : ''}</div>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        );
    }
}


function validate (values) {
    const errors ={};
    if (!values.title){
        errors.title = 'Please Enter A Title';
    }
    if (!values.categories){
        errors.categories = "Please Enter A Categories";
    }
    if (!values.content){
        errors.content = "Please Enter Some Content";
    }
    return errors;
}


export default reduxForm({
    form: 'PostNewForm',
    fields: ['title','categories','content'],
    validate
}, null, { createPost }
)(PostNew);