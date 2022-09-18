import React, { useEffect } from 'react';
import { Book } from './Book';
import { useSelector, useDispatch } from 'react-redux';
import { wishListActions, wishListSelectors } from '../../redux/wishListSlice';

export const BookListView = () => {

  useEffect(() => {
    startList();
  }, []);

  const {
    data
  } = useSelector(wishListSelectors.rootSelector);

  const dispatch = useDispatch();

  const startList = () => {
    dispatch(wishListActions.initializeList());
  };

  return (
    <>
      <div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12">

            <Book />

            <div className="row"></div>
            <div className="d-flex justify-content-between">


              {/* <Button className="btn btn-secondary disabled" aria-disabled="true">wstecz</Button> */}


            </div>
          </div>
        </div>
      </div>
    </>
  );

}