import React from 'react';
import Post from './Post.js';

const PostList = ({ posts }) => {
	return (
		<div classname=''> {
			posts.map((post) => {
				return (
					<Post 
						title={post.title}
						text={post.text}
						date={post.date}
					/>
				)
			})
		} </div>
	)
}

export default PostList;