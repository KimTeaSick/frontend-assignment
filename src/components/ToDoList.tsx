import * as React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import DeleteSVG from '../assets/delete.svg';
import CheckedSVG from '../assets/checked.svg';
import UnCheckedSVG from '../assets/unChecked.svg';
import {ToDoType} from '../modules/week/index.d';
import {StoreInterface} from '../modules/index.d';

type Props = {
  item: ToDoType;
  doIt: (item: ToDoType) => void;
  deleteIt: (item: ToDoType) => void;
};

export const ToDoList = ({item, doIt, deleteIt}: Props) => {
  const week = useSelector((state: StoreInterface) => state.week);

  return (
    <View style={style(week.editMode).toDoList}>
      {week.editMode === false && (
        <TouchableOpacity onPress={() => doIt(item)}>
          {item.checked ? <CheckedSVG /> : <UnCheckedSVG />}
        </TouchableOpacity>
      )}
      <Text style={style(week.editMode).toDoText}>{item.content}</Text>
      {week.editMode === true && (
        <TouchableOpacity
          style={style(week.editMode).deleteButton}
          onPress={() => deleteIt(item)}>
          <DeleteSVG />
        </TouchableOpacity>
      )}
    </View>
  );
};

const style = (editMode: boolean) =>
  StyleSheet.create({
    toDoList: {
      marginTop: 10,
      display: 'flex',
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: editMode ? 'space-between' : 'flex-start',
    },
    toDoText: {
      fontSize: 14,
      lineHeight: 21,
      paddingLeft: 12,
      color: '#333',
      textAlign: 'left',
    },
    deleteButton: {
      alignSelf: 'flex-end',
    },
  });
