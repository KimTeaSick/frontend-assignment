import * as React from 'react';
import {TextInput} from 'react-native';

type InputContextProps = {
  text: string;
  placeholder: string;
  event: () => {} | React.Dispatch<React.SetStateAction<string>>;
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

const InputBody = () => {
  const {text, placeholder, event} = useInputContext();
  return (
    <TextInput value={text} placeholder={placeholder} onChangeText={event} />
  );
};

InputWrapper.Input = InputBody;

export default InputWrapper;
