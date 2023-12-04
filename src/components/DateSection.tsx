import * as React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {RootInitialType} from '../modules/index.d';

import {DateButton} from './DateButton';
import {active} from '../modules/week';
import {makeWeekButton} from '../variables/makeWeekButton';

const weekList = makeWeekButton();

export const DateSection: React.FC = () => {
  const dispatch = useDispatch();
  const week = useSelector((state: RootInitialType) => state.week);

  const scrollRef = React.useRef(null);
  const coiceWeek = (weekNum: number) => {
    dispatch(active(weekNum));
  };

  const scrollCenter = (xPosition: number) => {
    scrollRef.current.scrollTo({
      animated: true,
      x: xPosition,
      y: 0,
    });
  };

  return (
    <ScrollView
      ref={scrollRef}
      horizontal={true}
      centerContent={true}
      contentOffset={{y: 0, x: 15 * 65 - 80}}
      style={style.scrollSection}
      contentContainerStyle={style.scrollContent}>
      {weekList.map((v, i) => (
        <DateButton
          title={String(v)}
          event={() => {
            coiceWeek(v);
            scrollCenter(v * 65 - 80);
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
