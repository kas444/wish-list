import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { wishListActions, wishListSelectors } from '../../../redux/wishListSlice';

export const Book = ({ book }) => {

    const [checked, setChecked] = useState([]);

    //TODO: think how to handle removing books from list
    const handleCheck = ({ id }) => {
        const newList = list.map((item) => {
            if (item.id === id) {
                const updatedItem = {
                    ...item,
                    isComplete: !item.isComplete,
                };

                return updatedItem;
            }

            return item;
        });

        setList(newList);

    };

    return (
        <tr>
            <th scope="row">{book.id}</th>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.published}</td>
            <td><input value={book} type="checkbox" onChange={() => handleCheck(book.id)} /></td>
        </tr>


    );
};