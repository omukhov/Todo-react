import React, { Component } from 'react';
import "./postStatusFilter.css";

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        // Создание кнопок в конструкторе
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
        ]
    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            //Выбор класса для активной кнопки
            const clazz = active ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button 
                    key={name} 
                    type="button" 
                    className={`btn ${clazz}`}
                    onClick={() => onFilterSelect(name)}>{label}</button>
            )
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
};
