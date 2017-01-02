import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPost,deletePost} from '../actions/index';
import { Link } from 'react-router';

class PostShow extends Component {
    
    static contextTypes = {
        router: React.PropTypes.object
    };

    componentWillMount(){
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id).then(
            () => {
                this.context.router.push('/');
            }
        );
    }

    render () {
        
        if(!this.props.post) {
            return <div>loading...</div>
        }
        return (
            <div>
            
            <Link to="/" className="btn btn-primary">Back to index</Link>
            
            <button className="btn btn-danger pull-right" onClick={this.onDeleteClick.bind(this)}> Delete Post </button>
            <h2>{this.props.post.title}</h2>
            <h6>Categories: {this.props.post.categories}</h6>
            <hr />
             <p>{this.props.post.content}</p>
            </div>

        );
    }
}


function mapStateToProps (state) {
    return {post: state.post.post};
}

export default connect(mapStateToProps, { fetchPost, deletePost } )(PostShow);