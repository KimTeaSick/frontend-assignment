import * as React from 'react';
import {Text, View} from 'react-native';
import ButtonWrapper from './headless/Button';

type Props = {
  title: string;
  event: () => void;
};

export const DateButton = ({title, event}: Props) => {
  return (
    <ButtonWrapper title={title} event={event}>
      <ButtonWrapper.Body>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>week</Text>
          <ButtonWrapper.Label />
        </View>
      </ButtonWrapper.Body>
    </ButtonWrapper>
  );
};
