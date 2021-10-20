import React, { Component } from 'react';
import AppHeader from '../appHeader';
import SearchPanel from '../searchPanel';
import PostStatusFilter from '../postStatusFilter';
import PostList from '../postList';
import PostAddForm from '../postAddForm';
import "./app.css";
import styled from 'styled-components';

// Все данные используются и находятся в app и прокидываются глубже в компонентах 

// Использование styled компонентов
const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // фейковые данные для постов
            data : [                                                              
                {label: 'Goind to learn react', important: true, like: false, id: 1},
                {label: 'That is so good', important: false, like: false, id: 2},
                {label: 'i need a break ...', important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        };
        // Присвоение обработчиков нынешнему объекту
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

        // id для новых постов
        this.maxId = 4;
    }

    // Удаление постов по кноке при помощи дриление пропсов
    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            // Создание 2 новых массивовов для создания нового списка
            const before = data.slice(0, index);
            const after = data.slice(index+1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            };
        });
    }

    // Добавление нового поста
    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        };
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            };
        });
    }

    // Переключение важных постов
    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(element => element.id === id);

            // Получение совпадающего поста
            const old = data[index];
            // Изменение ему важности
            const newItem = {...old, important: !old.important};

            // Склеивание массивов до элементе, самого элемента и после элемента
            const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArray
            };
        });
    }

    // Переключение залайканных постов
    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(element => element.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};

            const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArray
            };
        });
    }

    // Поиск постов
    searchPost(items, term) {
        // Проверка на пустую пустоту в строке поиска
        if (term.length === 0) {
            return items;
        }

        // Фильтр поиска
        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        });
    }

    // фильтрация постов
    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items;
        }
    }

    // Обновление состояния поиска
    onUpdateSearch(term) {
        this.setState({term});
    }

    // Обновление состояния фильтра
    onFilterSelect(filter) {
        this.setState(({filter}));
    }

    render() {
        // Получение пропсов
        const {data, term, filter} = this.state;

        // Получение для счетчика залайканные и все посты
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        // Видимые посты
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <AppBlock>
                <AppHeader 
                    liked={liked}
                    allPosts={allPosts}
                /> 
                <div className="search-panel d-flex">
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter 
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                /> 
                <PostAddForm 
                    onAdd={this.addItem}
                />
            </AppBlock>
        )
    }
}
