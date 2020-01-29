import React from "react";
import Post from "./Post";
import PostForm from "./PostForm";
import { Header } from "semantic-ui-react";
import '../styles/Blog.css';

class Blog extends React.Component {
  state = { posts: [] };

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addPost = (postData) => {
    const { posts } = this.state;
    const post = { id: this.getId(), ...postData };
    this.setState({ posts: [post, ...posts] });
  };

  editPost = (postData) => {
    const posts = this.state.posts.map(post => {
      if (post.id === postData.id)
        return postData;
      return post
    });
    this.setState({ posts });
  }

  renderPosts = () => {
    return this.state.posts.map(post => <Post key={post.id} {...post} edit={this.editPost} />)
  }

  render() {
    return (
      <>
        <Header inverted as="h1" textAlign='center'>Blog</Header>
        <br />
        <div>
          <PostForm add={this.addPost} />
        </div>
        {this.renderPosts()}

        <div className='cright-line'>
          <Header inverted as='h5' textAlign='center'> © Simian Matagi Development. All rights reserved.</Header>
        </div>

      </>
    )
  }
}

export default Blog;