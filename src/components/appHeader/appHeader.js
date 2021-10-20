import React from 'react';
import "./appHeader.css";
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        :hover {
            color: ${props => props.colored ? 'blue' : 'red'}
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`;

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header colored>
            <h1>Artem Omukhov</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </Header>
    );
};

export default AppHeader;