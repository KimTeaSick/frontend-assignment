import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonWrapper from './headless/Button';

type Props = {
  title: string;
  event: () => void;
  active: boolean;
};

export const DateButton = ({title, event, active}: Props) => {
  return (
    <ButtonWrapper title={title} event={event}>
      <ButtonWrapper.Body>
        <View style={style(active).Button}>
          <Text style={style(active).title}>week</Text>
          <ButtonWrapper.Label />
        </View>
      </ButtonWrapper.Body>
    </ButtonWrapper>
  );
};

const style = (active: boolean) =>
  StyleSheet.create({
    Button: {
      width: 50,
      height: 62,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: active ? '#44CEC6' : '#F6F5F8',
    },
    title: {
      color: active ? '#fff' : '#999',
    },
  });
