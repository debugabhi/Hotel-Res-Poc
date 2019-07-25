import React, { Component } from 'react';
import './SearchPanel.css';

export default class SearchPanel extends Component {
    render() {
        return (
            <form className="searchPanel">
                <label for="searchBox">Search</label>
                <input type="text" name="Search" id="searchBox" />
                <input type="submit" value="Seacrh" />
            </form>


        )
    }
}