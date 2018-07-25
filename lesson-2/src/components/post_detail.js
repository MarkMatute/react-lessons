import React from 'react';

const PostDetail = (props) => {
  return (
    <div>
      Post Detail { props.match.params.id }
    </div>
  )
}

export default PostDetail;