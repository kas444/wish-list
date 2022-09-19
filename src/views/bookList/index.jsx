import React, { useEffect } from "react";
import { Book } from './Book';
import { useSelector, useDispatch } from 'react-redux';
import { wishListActions, wishListSelectors } from '../../redux/wishListSlice';

export const BookListView = () => {
  useEffect(() => {
    showList();
  }, []);

  const dispatch = useDispatch();

  const showList = () => {
    dispatch(wishListActions.initializeList());
  };

  const bookList = useSelector(wishListSelectors.selectActiveBooks);

  return (
    //TODO: sortable array
    <>
      <div>Jeśli nie masz pomysłu na prezent dla mnie, skorzystaj z listy ponizej :)</div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tytuł</th>
            <th scope="col">Autor</th>
            <th scope="col">Data publikacji</th>
            <th scope="col">Usuń z listy</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map(book => (
            <Book key={book.id} book={book} />
          ))}
        </tbody>
      </table>
    </>

  );
}