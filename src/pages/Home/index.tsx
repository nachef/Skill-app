//SafeAreaView é para IOS
import {Button} from '../../components/Button';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Platform, FlatList, Alert} from 'react-native';
import {Container, Text, Description, TextInput} from './styles';
import {SkillCard} from '../../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    if (newSkill != '') {
      const filterSkill = mySkills.filter(x => x.name == newSkill);

      if (filterSkill.length == 0) {
        const newData = {
          id: String(new Date().getTime()),
          name: newSkill,
        };

        setMySkills(oldState => [...oldState, newData]);
      } else {
        Alert.alert('That skill is already in the list.');
      }
    } else {
      Alert.alert('Please type some skill to add to the list.');
    }
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGretting('Good morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good afternoon');
    } else {
      setGretting('Good night');
    }
  }, [mySkills]);

  return (
    <>
      <Container>
        <Text>Welcome, Nathan</Text>
        <Description>{gretting}</Description>
        <TextInput
          placeholder="New skill"
          placeholderTextColor="#999"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} title="Add new skill" />

        <Text>My Skills</Text>

        <FlatList
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <SkillCard
              skill={item.name}
              onPress={() => handleRemoveSkill(item.id)}
            />
          )}
        />
      </Container>
    </>
  );
}
