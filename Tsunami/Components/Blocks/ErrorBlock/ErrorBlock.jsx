import React from 'react';
import {View, Text, Button} from 'react-native';

const ErrorBlock = ({ error, resetErrorBoundary }) => {
  return (
    <View>
      <Text>Что-то пошло не так!</Text>
      <Text>{error.message}</Text>
      <Button onPress={resetErrorBoundary} title={'Try again'} />
    </View>
  );
};

export default ErrorBlock;
