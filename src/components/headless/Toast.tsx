import React, {createContext, useContext} from 'react';
import {Text} from 'react-native';

type ToastContextProps = {
  text: string;
  Icon: React.JSX.Element;
  FnText: string;
  callback: () => void;
};

type ToastProps = ToastContextProps & React.PropsWithChildren<{}>;

const ToastContext = createContext({
  text: '',
  Icon: <></>,
  FnText: '',
  callback: () => {},
});

const useToastContext = () => {
  const context = useContext(ToastContext);
  return context;
};

const ToastWrapper = ({text, Icon, FnText, callback, children}: ToastProps) => {
  const value = {text, Icon, FnText, callback};
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

const ToastLabel = ({style}: {style?: {}}) => {
  const {text} = useToastContext();
  return <Text style={style}>{text}</Text>;
};

const ToastFn = ({style}: {style?: {}}) => {
  const {FnText, callback} = useToastContext();
  return (
    <Text style={style} onPress={callback}>
      {FnText}
    </Text>
  );
};

const ToastIcon = () => {
  const {Icon} = useToastContext();
  return Icon;
};

ToastWrapper.Label = ToastLabel;
ToastWrapper.Fn = ToastFn;
ToastWrapper.Icon = ToastIcon;

export default ToastWrapper;
