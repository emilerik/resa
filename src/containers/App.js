import React, { Component } from 'react';
import PostList from '../components/PostList';
import Header from '../components/Header';
import NewPost from '../components/NewPost';
import {  posts } from '../posts';
import './App.css';
import 'tachyons';

class App extends Component {
  render() {
    return (

      <div className='App'>
        <Header/>
        <NewPost />
        <PostList posts={posts}/>
      </div>
    );
  }
}

export default App;
