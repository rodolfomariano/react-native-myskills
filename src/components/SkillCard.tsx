import React from 'react'
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
  skillName: string
}

export function SkillCard({ skillName, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.btnSkill}>
      <Text style={styles.textSkill} {...rest}>
        {skillName}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10
  },
  textSkill: {
    color: '#f0f0f0',
    fontSize: 22,
    fontWeight: 'bold'
  }
})