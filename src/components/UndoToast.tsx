import * as React from 'react';
import {StyleSheet, View} from 'react-native';

import ToastWrapper from './headless/Toast';
import UnDoSVG from '../assets/unDo.svg';

type Props = {
  event: () => void;
};

export const UndoToast = ({event}: Props) => {
  return (
    <ToastWrapper
      text={'Checklist deleted'}
      FnText={'Undo'}
      Icon={<UnDoSVG />}
      callback={event}>
      <View style={style.toastWrapper}>
        <ToastWrapper.Label style={style.toastText} />
        <View style={style.iconAndTextWrapper}>
          <ToastWrapper.Icon />
          <ToastWrapper.Fn style={style.tastFnTsxt} />
        </View>
      </View>
    </ToastWrapper>
  );
};

const style = StyleSheet.create({
  toastWrapper: {
    bottom: 20,
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    left: '10%',
    width: '80%',
  },
  iconAndTextWrapper: {
    flexDirection: 'row',
  },
  toastText: {
    color: '#fff',
    fontSize: 13,
  },
  tastFnTsxt: {
    color: '#44CEC6',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
