import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from './actions';
import { bindActionCreators } from 'redux';
// Import the Post component here:
import Post from './Post.js';
// import Comment from './Comment.js';
// import Author from './Author.js';

class Blog extends Component {

    constructor (props) {
        super()
        this.state = {
            body: props.body,
            newPostTitle: '',
            newPostBody: '',
            newPostAuthor: ''
        }
    }

    handleAddPost (e) {
        let newPost = {
            title: this.state.newPostTitle,
            author: this.state.newPostAuthor,
            body: this.state.newPostBody
        }
        this.props.addPost(newPost);
        this.setState({
            newPostTitle: '',
            newPostAuthor: '',
            newPostBody: ''
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.allPosts.map((post, i) => {
                        return (
                            <Post
                                title={ post.title }
                                author={ post.author }
                                body={ post.body }
                                key={ `${post.title}-${i}` }
                            />
                        )
                    })
                }
                <div>
                    <h1>Add Post</h1>
                    <input
                        placeholder="Enter Post Title"
                        value={ this.state.newPostTitle }
                        onChange={ (e) => this.setState({ newPostTitle: e.target.value }) }
                    />
                    <input
                        placeholder="Enter Post Author"
                        value={ this.state.newPostAuthor }
                        onChange={ (e) => this.setState({ newPostAuthor: e.target.value }) }
                    />
                    <br />
                    <textarea
                        placeholder="Enter Post body"
                        value={ this.state.newPostBody }
                        onChange={ (e) => this.setState({ newPostBody: e.target.value }) }
                    />
                    <br />
                    <button onClick={(e) => this.handleAddPost(e)}>Add Post</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        allPosts: state.allPosts
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addPost: addPost
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);