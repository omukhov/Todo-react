import React from 'react';
import PostListItem from '../postListItem';
import {ListGroup} from 'reactstrap';
import "./postList.css";

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    // Получение массива постов с данными из пропс, полученными из app
    let elements = posts.map((item) => {
        return (
            <li key={item.id} 
                className="list-group-item">
                <PostListItem 
                    label={item.label} 
                    important={item.important} 
                    like={item.like}
                    // Пропсы прокинутые из app 
                    onDelete={() => onDelete(item.id)}
                    onToggleImportant={() => onToggleImportant(item.id)}
                    onToggleLiked={() => onToggleLiked(item.id)}
                />
            </li>     
        );
    });
    return (
        <ListGroup className="app-list">
           {elements}
        </ListGroup>
    );
};

export default PostList;