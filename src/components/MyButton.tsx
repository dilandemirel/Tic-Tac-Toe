import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Styles'

type Props = {
    text:string
    onPress?:() =>void
}

const MyButton:React.FC<Props> = ({text,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button]}>
        <Text style={[styles.buttonText, styles.py1, styles.tac]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default MyButton