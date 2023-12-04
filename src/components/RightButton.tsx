import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import ButtonWrapper from './headless/Button';
import {RootInitialType} from '../modules/index.d';
import {editMode} from '../modules/week';

export const RightButton = () => {
  const dispatch = useDispatch();
  const week = useSelector((state: RootInitialType) => state.week);
  const setEditMode = () => {
    dispatch(editMode(!week.editMode));
  };
  return (
    <TouchableOpacity>
      <ButtonWrapper
        title={week.writeMode ? '' : week.editMode ? 'Done' : 'Edit'}
        event={setEditMode}>
        <ButtonWrapper.Body>
          <ButtonWrapper.Label />
        </ButtonWrapper.Body>
      </ButtonWrapper>
    </TouchableOpacity>
  );
};
