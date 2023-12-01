import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CheckSVG from '../assets/noToDo.svg';
import CheckedSVG from '../assets/checked.svg';
import UnCheckedSVG from '../assets/unChecked.svg';
import {useDispatch, useSelector} from 'react-redux';
import {storeInterface} from '../modules/index.d';
import {QuestionType} from '../modules/week/index.d';
import {setItem} from '../utils/setItem';
import {checked} from '../modules/week';
import {ProgressBar} from './ProgressBar';

type Props = {
  id: number;
};

export const CheckList = ({id}: Props) => {
  const dispatch = useDispatch();
  const weekSe = useSelector((state: storeInterface) => state.week);
  const [weekToDo, setWeekToDo] = React.useState<QuestionType[]>([]);

  const doIt = (item: QuestionType) => {
    dispatch(
      checked({
        content: item.content,
        weekNumber: item.weekNumber,
        checked: !item.checked,
      }),
    );
  };

  React.useEffect(() => {
    const item = setItem(weekSe.questionList, id);
    setWeekToDo(item);
  }, [weekSe.questionList, id]);

  return (
    <View style={style.toDoListWrapper}>
      <ProgressBar items={weekToDo} />
      <View>
        {weekToDo.map(
          item =>
            item.weekNumber === id && (
              <View style={style.toDoList}>
                <TouchableOpacity onPress={() => doIt(item)}>
                  {item.checked ? <CheckedSVG /> : <UnCheckedSVG />}
                </TouchableOpacity>
                <Text style={style.toDoText}>{item.content}</Text>
              </View>
            ),
        )}
        <CheckSVG />
      </View>
      <Text style={style.largeText}>No checklists</Text>
      <Text>Add checklists that should be checked weekly.</Text>
    </View>
  );
};

const style = StyleSheet.create({
  toDoListWrapper: {
    flex: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  largeText: {
    fontSize: 20,
    color: '#84858F',
    fontWeight: 'bold',
  },
  toDoList: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  toDoText: {
    fontSize: 14,
    paddingLeft: 12,
    color: '#333',
    textAlign: 'left',
    lineHeight: 21,
  },
  baseText: {
    fontSize: 18,
    color: '#999',
  },
});
