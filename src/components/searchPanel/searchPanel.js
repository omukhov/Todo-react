import React from 'react';
import "./searchPanel.css";

const SearchPanel = () => {
    return (
        <input
            className="form-control search-input"
            type="text"
            placeholder="Поиск по записям"
        />
    );
};

export default SearchPanel;