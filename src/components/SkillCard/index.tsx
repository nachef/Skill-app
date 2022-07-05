import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {Container, Text} from './styles';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}
export function SkillCard({skill, ...rest}: SkillCardProps) {
  return (
    <TouchableOpacity {...rest}>
      <Container>
        <Text>{skill}</Text>
      </Container>
    </TouchableOpacity>
  );
}
