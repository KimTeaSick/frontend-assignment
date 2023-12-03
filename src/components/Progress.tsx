import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import Animated from 'react-native-reanimated';

import {setCompleted} from '../utils/setCompleted';
import {ToDoType} from '../modules/week/index.d';
import {ProgressBar} from './ProgressBar';

type Props = {
  items: ToDoType[];
};

export const Progress = ({items}: Props) => {
  const [completedToDo, setCompletedToDo] = React.useState(0);

  React.useEffect(() => {
    const complte = setCompleted(items);
    setCompletedToDo(complte);
  }, [items]);
  return (
    <View style={style.progressWrapper}>
      <View style={style.textSection}>
        <Text style={style.textStyle}>
          {completedToDo} of {items.length} completed
        </Text>
        <Text style={[style.textStyle, style.percentText]}>
          {((completedToDo / items.length) * 100).toFixed(0)} %
        </Text>
      </View>
      <ProgressBar items={items.length} completedToDo={completedToDo} />
    </View>
  );
};

const style = StyleSheet.create({
  progressWrapper: {paddingTop: 25, paddingBottom: 25, gap: 17},
  textSection: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  percentText: {
    color: '#00BBBB',
  },
});
