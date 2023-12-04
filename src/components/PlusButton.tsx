import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import PlusSVG from '../assets/plus.svg';

type Props = {
  event: () => void;
};

export const PlusButton = ({event}: Props) => {
  return (
    <TouchableOpacity style={style.buttonSection} onPress={() => event()}>
      <PlusSVG />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  buttonSection: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
