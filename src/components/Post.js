import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Comment from './Comment';


const Post = (props) => {
    return (
        <div className="Post">
            <div className="Post-header">
                <div className="Post-header-profile-image">
                    <img src={props.avatar} alt="PostProfileImage"/>
                </div>
                <div className="Post-header-username">
                    {props.username}
                </div>
                <div className="Post-header-more-btn">
                <FontAwesomeIcon icon={faEllipsisV}/>
                </div>
            </div>
            <div className="Post-image">
                <img src={props.image} alt="PostImage"/>
            </div>
            <div className="Post-caption">
                <span className="Post-caption-username">{props.username}</span>
                {props.caption}
                <div className="Post-caption-time">
                    {props.time}
                </div>
            </div>
            <div className="Post-comments">
                {
                    props.comments.map(comment => {
                        return <Comment 
                                username={comment.username} 
                                avatar={comment.avatar} 
                                is-like={comment['is-like']}
                                comment={comment.comment}
                                time={comment.time}/>
                    })
                }
            </div>
        </div>
    )
}

export default Post;