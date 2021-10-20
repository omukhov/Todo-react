import React from 'react';
import AppHeader from '../appHeader';
import SearchPanel from '../searchPanel';
import PostStatusFilter from '../postStatusFilter';
import PostList from '../postList';
import PostAddForm from '../postAddForm';
import "./app.css";

const App = () => {

    // фейковые данные для постов
    const data = [                                                              
        {label: 'Goind to learn react', important: true, id: 'adasdawe'},
        {label: 'That is so good', important: false, id: 'adadasdaawe'},
        {label: 'i need a break ...', important: false, id: 'adasewqewdawe'}
    ];

    return (
        <div className="app">
            <AppHeader /> 
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data}/> 
            <PostAddForm />
        </div>
    )
}

export default App;