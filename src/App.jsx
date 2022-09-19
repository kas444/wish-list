import React from 'react';
import './style.css';
import { BookListView } from './views/bookList';

export default function App() {

  return (
    <>
      <div>
        <header>
          <h1 className="main-banner">MOJA LISTA KSIĄŻEK</h1>
        </header>
        <BookListView />
      </div>
    </>
  );
}
