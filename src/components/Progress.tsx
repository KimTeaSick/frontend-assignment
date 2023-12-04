import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ToDoType} from '../modules/week/index.d';

import {setCompleted} from '../utils/setCompleted';
import {ProgressBar} from './ProgressBar';

type Props = {
  toDo: ToDoType[];
};

export const Progress = ({toDo}: Props) => {
  const [completedToDo, setCompletedToDo] = React.useState(0);

  React.useEffect(() => {
    const complte = setCompleted(toDo);
    setCompletedToDo(complte);
  }, [toDo]);

  return (
    <View style={style.progressWrapper}>
      <View style={style.textSection}>
        <Text style={style.textStyle}>
          {completedToDo} of {toDo.length} completed
        </Text>
        <Text style={[style.textStyle, style.percentText]}>
          {((completedToDo / toDo.length) * 100).toFixed(0)} %
        </Text>
      </View>
      <ProgressBar toDo={toDo.length} completedToDo={completedToDo} />
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
