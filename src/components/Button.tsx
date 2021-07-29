import React from 'react'
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  addSkill: () => void
}

export function Button({ addSkill, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.btn}
      activeOpacity={.7}
      onPress={addSkill}
      {...rest}
    >
      <Text style={styles.btnText}>Add</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  btnText: {
    color: '#f0f0f0',
    fontSize: 18,
    fontWeight: 'bold'
  },
})