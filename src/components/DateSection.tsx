import * as React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {StoreInterface} from '../modules/index.d';

import {active} from '../modules/week';
import {DateButton} from './DateButton';
import {makeWeekButton} from '../variables/week';

const weekList = makeWeekButton();

export const DateSection: React.FC = () => {
  const dispatch = useDispatch();
  const week = useSelector((state: StoreInterface) => state.week);

  const scrollRef = React.useRef(null);
  const coiceWeek = (weekNum: number) => {
    dispatch(active(weekNum));
  };

  const scrollCenter = (xPosition: number) => {
    scrollRef.current.scrollTo({
      x: xPosition,
      y: 0,
      animated: true,
    });
  };

  //50 + 30 = 65 * activeWeek = center
  return (
    <ScrollView
      ref={scrollRef}
      horizontal={true}
      centerContent={true}
      contentOffset={{y: 0, x: 15 * 65 - 10}}
      style={style.scrollSection}
      contentContainerStyle={style.scrollContent}>
      {weekList.map((v, i) => (
        <DateButton
          title={String(v)}
          event={() => {
            coiceWeek(v);
            scrollCenter(v * 65 - 10);
          }}
          active={week.activeWeek === v}
          key={i}
        />
      ))}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  scrollContent: {
    paddingLeft: 160,
    paddingRight: 160,
    display: 'flex',
    columnGap: 15,
    alignItems: 'center',
  },
  scrollSection: {
    flex: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#F6F5F8',
  },
});
