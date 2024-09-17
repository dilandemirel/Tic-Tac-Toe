import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './Styles';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
    squares: string[];
    handlePress: (index: number) => void;
    handleReset: () => void;
    scoreText?: boolean;

    finish: {
        gameOver: boolean;
        text: string;
    }

    score: {
        O: number;
        X: number;
    }
}

const GameComponent: React.FC<Props> = (props) => {

    const { finish, handlePress, handleReset, score, squares, scoreText } = props

    return (
        <React.Fragment>
            <View style={styles.container}>

                {/*reset*/}

                <View>
                    <View style={[styles.resetButon]}>
                        <TouchableOpacity>
                            <Icon onPress={handleReset} name="retweet" size={30} color="#ddd"></Icon>
                        </TouchableOpacity>
                    </View>
                </View>

                {/*board*/}

                <View style={styles.boardContainer}>
                    <View style={[styles.board]}>
                        {squares.map((square: string, index: number) => (
                            <TouchableOpacity key={index} style={styles.cell} onPress={() => handlePress(index)} disabled={square !== null}>
                                <Text style={[styles.cellTextMe, square == "X" && { color: "#f2b237" }]}>
                                    {square}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>

            {/*score*/}
            <View style={styles.scoreContainer}>
                <View style={[styles.jcsb, styles.fdr]}>
                    <View style={styles.scoreBoxMe}>
                        <Text>
                            {scoreText ? "X (YOU)" : "X"}
                        </Text>
                        <Text>
                            {score.X}
                        </Text>
                    </View>
                    <View style={styles.scoreBox}>
                        <Text>
                            {scoreText ? "O (AI)" : "O"}
                        </Text>
                        <Text>
                            {score.X}
                        </Text>
                    </View>
                </View>
            </View>

            {/*gameover*/}

            {finish.gameOver && (
                <View style={styles.gameOver}>
                    <Text style={styles.gameOverText}>
                        {finish.text}
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={handleReset}>
                        <Text style={styles.buttonText}>
                            New Game
                        </Text>
                    </TouchableOpacity>
                </View>
            )}

        </React.Fragment>
    )
}

export default GameComponent