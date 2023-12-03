import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';

type Props = {
  items: number;
  completedToDo: number;
};

export const ProgressBar = ({items, completedToDo}: Props) => {
  const width = useSharedValue(0);

  useEffect(() => {
    width.value = withTiming(`${(completedToDo / items) * 100}%`, {
      duration: 1000,
    });
  }, [width, items, completedToDo]);

  return (
    <View style={style.Progress}>
      <Animated.View
        style={[
          style.Progress,
          {
            width,
            backgroundColor: '#44CEC6',
          },
        ]}
      />
    </View>
  );
};

const style = StyleSheet.create({
  Progress: {
    height: 6,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#F6F5F8',
  },
});
