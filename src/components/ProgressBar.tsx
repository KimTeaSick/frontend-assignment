import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';

type Props = {
  toDo: number;
  completedToDo: number;
};

export const ProgressBar = ({toDo, completedToDo}: Props) => {
  const precent = useSharedValue(0);

  useEffect(() => {
    const ho = Dimensions.get('window').width;
    const progress = (completedToDo / toDo) * ho;
    precent.value = withTiming(progress, {
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    });
  }, [toDo, completedToDo, precent]);

  return (
    <View style={style.Progress}>
      <Animated.View
        style={[
          style.progressBar,
          {
            width: precent,
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
    overflow: 'hidden',
  },
  progressBar: {
    width: 0,
    height: '100%',
    backgroundColor: '#44CEC6',
  },
});
