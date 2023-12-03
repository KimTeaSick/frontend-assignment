import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import InputWrapper from './headless/Input';
import UploadUnableSVG from '../assets/uploadUnable.svg';
import UploadAbleSVG from '../assets/uploadAble.svg';
import * as React from 'react';
import {useDispatch} from 'react-redux';
import {addList} from '../modules/week';

type Props = {
  weekNum: number;
};

export const ToDoInput = ({weekNum}: Props) => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState('');

  const addToDoList = (weekNum: number, text: string) => {
    console.log(weekNum, text);

    dispatch(
      addList({
        weekNum,
        content: text,
      }),
    );
  };

  return (
    <View style={style.todoInputWrapper}>
      <InputWrapper text={text} placeholder="add checklist..." event={setText}>
        <View
          style={{
            justifyContent: 'center',
            overflow: 'hidden',
            maxWidth: 'auto',
          }}>
          <InputWrapper.Input />
        </View>
      </InputWrapper>
      <TouchableOpacity onPress={() => addToDoList(weekNum, text)}>
        {text === '' ? <UploadUnableSVG /> : <UploadAbleSVG />}
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  todoInputWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    left: 20,

    padding: 5,
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: 'row',
    borderColor: '#EAE9ED',
    backgroundColor: '#FAFAFA',
    justifyContent: 'space-between',
  },
});
