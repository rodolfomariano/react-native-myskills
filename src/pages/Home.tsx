import React, { useEffect, useState } from 'react'
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  // ScrollView,
  FlatList,
} from 'react-native'

import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

interface SkillData {
  id: string
  name: string
}

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState<SkillData[]>([])
  const [gretting, setGretting] = useState('')

  useEffect(() => {
    const currentHour = new Date().getHours()

    if (currentHour < 12) {
      setGretting('Good morning!')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good afternoon!')
    } else if (currentHour >= 18 && currentHour < 24) {
      setGretting('Good night!')
    }

  }, [])

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills(oldSkills => [...oldSkills, data])
    setNewSkill('')
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Rodolfo</Text>
      <Text style={styles.greetings}>{gretting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#666"
        onChangeText={setNewSkill}
        value={newSkill}
      />
      <Button addSkill={handleAddNewSkill} />

      <Text style={[styles.title, { marginTop: 50, marginBottom: 30 }]}>
        My Skills
      </Text>

      {
        //ScrollView renderiza todos os elementos
        //FlatList renderiza apenas os elementos que estão sendo mostrados
      }
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {mySkills.map(skill => {
          return (
            <SkillCard key={skill} skillName={skill} />
          )
        })}
      </ScrollView> */}

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard skillName={item.name} onPress={() => handleRemoveSkill(item.id)} />
        )}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#f0f0f0',
    fontSize: 24,
    fontWeight: 'bold'
  },
  greetings: {
    color: '#f0f0f0',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#f0f0f0',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 8
  },


})