import * as React from 'react';
import {useDispatch} from 'react-redux';
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import UploadAbleSVG from '../assets/uploadAble.svg';
import UploadUnableSVG from '../assets/uploadUnable.svg';

import InputWrapper from './headless/Input';
import {addList} from '../modules/week';

type Props = {
  weekNum: number;
};

export const ToDoInput = ({weekNum}: Props) => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState('');
  const [keyboardHeight, setKeyboardHeight] = React.useState(0);

  // 이벤트 리스너 등록
  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', event => {
      setKeyboardHeight(event.endCoordinates.height);
    });
  }, []);

  const addToDoList = (weekNum: number, text: string) => {
    dispatch(
      addList({
        weekNum,
        content: text,
      }),
    );
  };

  return (
    <KeyboardAvoidingView style={style(keyboardHeight).todoInputWrapper}>
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
    </KeyboardAvoidingView>
  );
};

const style = (keyHeight: number) =>
  StyleSheet.create({
    todoInputWrapper: {
      width: '100%',
      position: 'absolute',
      left: 20,
      bottom: keyHeight,
      padding: 5,
      borderWidth: 1,
      borderRadius: 12,
      flexDirection: 'row',
      borderColor: '#EAE9ED',
      backgroundColor: '#FAFAFA',
      justifyContent: 'space-between',
    },
  });
