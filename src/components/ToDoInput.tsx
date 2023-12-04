import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
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
import {addList, fixList, fixToDoChoice, writeMode} from '../modules/week';
import {RootInitialType} from '../modules/index.d';

type Props = {
  weekNum: number;
};

export const ToDoInput = ({weekNum}: Props) => {
  const dispatch = useDispatch();
  const week = useSelector((state: RootInitialType) => state.week);
  const [text, setText] = React.useState(
    week.fixToDo ? week.fixToDo.content : '',
  );
  const [keyboardHeight, setKeyboardHeight] = React.useState(0);

  const setWriteMode = () => {
    dispatch(writeMode(false));
  };

  const addToDoList = (weekNumber: number, content: string) => {
    dispatch(addList({weekNumber, content}));
  };
  const fixToDoList = (content: string) => dispatch(fixList({content}));

  React.useEffect(() => {
    Keyboard.addListener('keyboardDidShow', event => {
      setKeyboardHeight(event.endCoordinates.height);
    });
    return () => {
      dispatch(fixToDoChoice(null));
    };
  }, [dispatch]);

  return (
    <TouchableWithoutFeedback onPress={() => setWriteMode()}>
      <View style={style.writeModeSection}>
        <View style={fnStyle(keyboardHeight).todoInputSection}>
          <View style={style.inputWrapper}>
            <InputWrapper
              text={text}
              placeholder="add checklist..."
              event={setText}>
              <View style={style.inputContent}>
                <InputWrapper.Input />
              </View>
              <TouchableOpacity
                onPress={() =>
                  week.fixToDo
                    ? fixToDoList(text)
                    : text !== '' && addToDoList(weekNum, text)
                }>
                {text === '' ? <UploadUnableSVG /> : <UploadAbleSVG />}
              </TouchableOpacity>
            </InputWrapper>
          </View>
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
    backgroundColor: 'rgba(0 0 0 / 0.3)',
  },
  inputWrapper: {
    width: '100%',
    bottom: 0,
    padding: 5,
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: 'row',
    borderColor: '#EAE9ED',
    backgroundColor: '#FAFAFA',
    justifyContent: 'space-between',
  },
  inputContent: {
    overflow: 'hidden',
    justifyContent: 'center',
    width: '85%',
  },
});

const fnStyle = (keyHeight: number) =>
  StyleSheet.create({
    todoInputSection: {
      width: '100%',
      position: 'absolute',
      bottom: keyHeight === 0 ? 0 : keyHeight,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      paddingTop: 10,
      borderWidth: 1,
      flexDirection: 'row',
      borderColor: '#F6F5F8',
      backgroundColor: '#FAFAFA',
      justifyContent: 'space-between',
    },
  });
