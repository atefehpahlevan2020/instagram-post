import React from 'react';
import {faker} from '@faker-js/faker';
import './App.css';
import Post from './Post';

function getRandomPostTime(){
    return (Math.floor(Math.random() * 10) + 1) + 'h';
}

const App = (props) => {    
    return (
        <div>
            <Post 
                avatar={faker.internet.avatar()} 
                username={faker.internet.userName()}
                image={faker.image.image()}
                caption='this is first caption'
                time='3h ago'
                comments={[
                    {
                        username: faker.internet.userName(),
                        avatar: faker.internet.avatar(),
                        time: getRandomPostTime(),
                        comment: faker.lorem.words(15),
                        'is-like': faker.datatype.boolean()
                    },
                    {
                        username: faker.internet.userName(),
                        avatar: faker.internet.avatar(),
                        time: getRandomPostTime(),
                        comment: faker.lorem.words(15),
                        'is-like': faker.datatype.boolean()
                    },
                    {
                        username: faker.internet.userName(),
                        avatar: faker.internet.avatar(),
                        time: getRandomPostTime(),
                        comment: faker.lorem.words(15),
                        'is-like': faker.datatype.boolean()
                    }
                ]}/>
        </div>
    );
}

export default App;