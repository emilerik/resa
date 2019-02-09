import React from 'react';

const NewPost = () => {
	return (
		<div className='tc ba b--black-40 ma2'>
			<textarea
			className='pa3'
			type='text'
			placeholder='write post...'
			// onChange={searchChange}
			/>
		</div>
	)
}

export default NewPost;