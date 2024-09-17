import { View, Text, TouchableOpacity} from "react-native";
import React from "react";
import MyButton from "../components/MyButton";
import styles from "../components/Styles";
import { useNavigation} from "@react-navigation/native";

const Home = () => {

    const navigator = useNavigation()

    const handlePress = (path:string) => { 

        navigator.navigate(path as never)
    }

    return (
        <React.Fragment>
            <View>
                <View style= {[styles.container2]}>
                    <View>
                        <MyButton text="Play with friend" onPress={() => handlePress("Friend")}/>
                    </View>
                    <View style={[styles.mt2]}>
                        <MyButton text="Play single" onPress={() => handlePress("Single")}/>
                    </View>
                </View>
            </View>
        </React.Fragment>
    )
}

export default Home;