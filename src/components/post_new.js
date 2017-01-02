import React, { Component } from  'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostNew extends Component {
    
    static contextTypes ={
        router: React.PropTypes.object //router: PropTypes.object would not work; Need React.
    };
    
    onSubmit (props) {
        this.props.createPost(props)
        .then(
            () => {
                //blog has been created, navigate the user to the index
                //nevigate by calling this.context.router.path with the 
                //new path to nevigate to
                this.context.router.push('/');
            }
        );
    }
    
    render () {

        const { fields: {title, categories,content}, handleSubmit } = this.props;
        return (
            // this.onSubmit.bind(this) : the onSubmit function's 'this' means the 'this' of the component
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }> 
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
                <Link to="/" className="btn btn-danger">Cancel</Link>
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