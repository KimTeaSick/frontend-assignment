import * as React from 'react';
import {TextInput} from 'react-native';

type InputContextProps = {
  text: string;
  placeholder: string;
  event: React.Dispatch<React.SetStateAction<string>> | (() => void);
};

type InputProps = InputContextProps & React.PropsWithChildren<{}>;

const InputContext = React.createContext({
  text: '',
  placeholder: '',
  event: () => {},
});

const useInputContext = () => {
  const context = React.useContext(InputContext);
  return context;
};

const InputWrapper = ({text, placeholder, event, children}: InputProps) => {
  const value = {text, placeholder, event};
  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};

const InputBody = ({style}: {style?: {}}) => {
  const {text, placeholder, event} = useInputContext();

  return (
    <TextInput
      style={style}
      value={text}
      autoFocus={true}
      onChangeText={event}
      placeholder={placeholder}
    />
  );
};

InputWrapper.Input = InputBody;

export default InputWrapper;
