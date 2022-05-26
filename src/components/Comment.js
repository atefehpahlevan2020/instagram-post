import React from 'react';
import { faker } from '@faker-js/faker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';


function getRandomPostTime(){
    return (Math.floor(Math.random() * 10) + 1) + 'h';
}
function getRandomLikeBtn() {
    return faker.datatype.boolean() ? <FontAwesomeIcon icon={faHeart}/> : <FontAwesomeIcon style={{color:'red'}} icon={faHeartSolid}/>
}


const Comment = (props) => {
    return (
        <>
            <div className="Comment">
                <div className="Comment-user-profile">
                    <img src={faker.image.avatar()} alt="UserCommentProfile"/>
                </div>
                <div className="Comment-comment">
                    <div className="Comment-text">
                        <span className="Post-caption-username">{faker.name.firstName()}</span>
                        {faker.lorem.words(20)}
                    </div>
                    <div className="Comment-detail">
                        <span>{getRandomPostTime()}</span>
                        <span>Reply</span>
                    </div>
                </div>
                <div className="Comment-like">
                        <FontAwesomeIcon icon={faHeart}/>
                </div>
            </div>
            <div className="Comment">
                <div className="Comment-user-profile">
                    <img src={faker.image.avatar()} alt="UserCommentProfile"/>
                </div>
                <div className="Comment-comment">
                    <div className="Comment-text">
                        <span className="Post-caption-username">{faker.name.firstName()}</span>
                        {faker.lorem.words(20)}
                    </div>
                    <div className="Comment-detail">
                        <span>{getRandomPostTime()}</span>
                        <span>Reply</span>
                    </div>
                </div>
                <div className="Comment-like">
                    <FontAwesomeIcon icon={faHeartSolid}/>
                </div>
            </div>
            <div className="Comment">
                <div className="Comment-user-profile">
                    <img src={faker.image.avatar()} alt="UserCommentProfile"/>
                </div>
                <div className="Comment-comment">
                    <div className="Comment-text">
                        <span className="Post-caption-username">{faker.name.firstName()}</span>
                        {faker.lorem.words(20)}
                    </div>
                    <div className="Comment-detail">
                        <span>{getRandomPostTime()}</span>
                        <span>Reply</span>
                    </div>
                </div>
                <div className="Comment-like">
                    {getRandomLikeBtn()}
                </div>
            </div>
        </>
    )
}

export default Comment;