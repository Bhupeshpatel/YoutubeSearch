import React from 'react';
import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

export default class Books extends React.Component{
    render(){
        return(
            <div>
                <BookList />
                <BookDetail />
            </div>
        );
    }
}