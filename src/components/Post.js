import React from 'react';
import '../Post.css';

const Post = ({ title, text, date }) => {
	return (
			<div className='postlist tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
				<h2>{title}</h2>
				<p>{text}</p>
				<p>{date}</p>
			</div>
		)
}

export default Post;