import * as React from 'react';
import {useDispatch} from 'react-redux';
import {
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import UploadAbleSVG from '../assets/uploadAble.svg';
import UploadUnableSVG from '../assets/uploadUnable.svg';

import InputWrapper from './headless/Input';
import {addList, writeMode} from '../modules/week';

type Props = {
  weekNum: number;
};

export const ToDoInput = ({weekNum}: Props) => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState('');
  const [keyboardHeight, setKeyboardHeight] = React.useState(0);

  const setWriteMode = () => {
    dispatch(writeMode(false));
  };

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
    <TouchableWithoutFeedback onPress={() => setWriteMode()}>
      <View style={style.writeModeSection}>
        <View style={fnStyle(keyboardHeight).todoInputWrapper}>
          <InputWrapper
            text={text}
            placeholder="add checklist..."
            event={setText}>
            <View
              style={{
                justifyContent: 'center',
                overflow: 'hidden',
                maxWidth: 'auto',
              }}>
              <InputWrapper.Input />
            </View>
          </InputWrapper>
          <TouchableOpacity
            onPress={() => text !== '' && addToDoList(weekNum, text)}>
            {text === '' ? <UploadUnableSVG /> : <UploadAbleSVG />}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  writeModeSection: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'rgba(0 0 0 / 0.3)',
  },
});

const fnStyle = (keyHeight: number) =>
  StyleSheet.create({
    todoInputWrapper: {
      width: '100%',
      position: 'absolute',
      bottom: keyHeight === 0 ? 20 : keyHeight,
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
