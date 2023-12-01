import * as React from 'react';
import {ScrollView} from 'react-native';

import {DateButton} from './DateButton';
import {activeSection} from '../utils/activeSection';

export const DateSection: React.FC = () => {
  const [activeButton, setActiveButton] = React.useState(15);
  const [showList, setShowList] = React.useState<number[]>([]);

  React.useEffect(() => {
    const active = activeSection(activeButton);
    setShowList(active);
  }, [activeButton]);

  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{
        display: 'flex',
        columnGap: 15,
        alignItems: 'center',
      }}
      style={{
        flex: 2,
        borderBottomWidth: 1,
        borderBottomColor: '#F6F5F8',
      }}>
      {showList.map((v, i) => (
        <DateButton
          title={String(v)}
          event={() => setActiveButton(v)}
          active={activeButton === v}
          key={i}
        />
      ))}
    </ScrollView>
  );
};
