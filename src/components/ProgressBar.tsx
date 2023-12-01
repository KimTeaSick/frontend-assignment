import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {setCompleted} from '../utils/setCompleted';
import {QuestionType} from '../modules/week/index.d';

type Props = {
  items: QuestionType[];
};

export const ProgressBar = ({items}: Props) => {
  const [completedToDo, setCompletedToDo] = React.useState(0);
  React.useEffect(() => {
    const complte = setCompleted(items);
    setCompletedToDo(complte);
  }, [items]);
  return (
    <View>
      <Text style={style.textStyle}>
        {completedToDo} of {items.length} completed
      </Text>
      <View />
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
});
