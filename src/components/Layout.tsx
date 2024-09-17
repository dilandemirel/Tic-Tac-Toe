import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {
    children:React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <React.Fragment>
        <SafeAreaView style={{ marginHorizontal:10, flex:1 }}>
            {children}
        </SafeAreaView>
    </React.Fragment>
  )
}

export default Layout