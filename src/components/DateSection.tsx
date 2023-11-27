import * as React from 'react';
import {ScrollView} from 'react-native';
import {DateButton} from './DateButton';
import {FC} from 'react';

const arr = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];

export const DateSection: FC = () => {
  return (
    <ScrollView horizontal={true}>
      {arr.map((v, i) => (
        <DateButton title={v} event={() => console.log(v)} key={i} />
      ))}
    </ScrollView>
  );
};
