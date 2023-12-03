import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';

type ButtonContextProps = {
  title: string;
  event: () => void;
};

type ButtonProps = ButtonContextProps & React.PropsWithChildren<{}>;

const ButtonContext = React.createContext({
  title: '',
  event: () => {},
});

const useButtonContext = () => {
  const context = React.useContext(ButtonContext);
  return context;
};

const ButtonWrapper = ({title, event, children}: ButtonProps) => {
  const value = {title, event};
  return (
    <ButtonContext.Provider value={value}>{children}</ButtonContext.Provider>
  );
};

const Label = ({style}: {style?: {}}) => {
  const {title} = useButtonContext();
  return <Text style={style}>{title}</Text>;
};

const Body = ({children}: React.PropsWithChildren<{}>) => {
  const {event} = useButtonContext();
  return <TouchableOpacity onPress={event}>{children}</TouchableOpacity>;
};

ButtonWrapper.Label = Label;
ButtonWrapper.Body = Body;

export default ButtonWrapper;
