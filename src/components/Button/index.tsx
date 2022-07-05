import React from 'react';
import {TouchableOpacityProps, TouchableOpacity} from 'react-native';

import {Container, Text} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({title, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} {...rest}>
      <Container>
        <Text>{title}</Text>
      </Container>
    </TouchableOpacity>
  );
}
