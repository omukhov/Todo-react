import React from 'react';
import PostListItem from '../postListItem';
import "./postList.css";

const PostList = ({posts}) => {

    // Получение массива постов с данными из пропс, полученными из app
    let elements = posts.map((item) => {
        return (
            <li key={item.id} 
                className="list-group-item">
                <PostListItem 
                label={item.label} 
                important={item.important} 
                />
            </li>     
        );
    });
    return (
        <ul className="app-list list-group">
           {elements}
        </ul>
    );
};

export default PostList;