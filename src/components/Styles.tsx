import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000'
    },

    container2:{
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    
    center:{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },

    aic:{
        alignItems: "center"
    },

    jdc:{
        flexDirection: "column"
    },

    jcsb:{
        justifyContent: "space-between"
    },

    jcsa:{
        justifyContent: "space-around"
    },

    jcc:{
        justifyContent: "center"
    },

    tac:{
        textAlign: "center"
    },

    fdr:{
        flexDirection:"row"
    },

    buttonText:{
        fontSize:20
    },

    button:{
        backgroundColor:"#fff",
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:5
    },

    //board display

    board:{
        flex:1,
        flexDirection: "row",
        flexWrap: "wrap",
        borderWidth:2,
        borderColor:"#000",
        gap:5,
        alignItems: "center",
        justifyContent: "center"
    },

    boardContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },

    cell:{
        width:100,
        height:100,
        borderWidth:1,
        borderColor:"#ddd",
        alignItems:"center",
        justifyContent:"center"
    },

    cellText:{
        fontSize:48,
        color:"fff"
    },

    cellTextMe:{
        fontSize:48,
        color:"f2b237"
    },

    //game finished

    gameOver:{
        position:"absolute",
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:"rgba(0,0,0,0.5)",
        alignItems:"center",
        justifyContent:"center"
    },

    gameOverText:{
        fontSize:36,
        fontWeight:"bold",
        color:"#fff",
        marginBottom:30
    },

    //score

    scoreContainer:{
        marginLeft:20,
        marginRight:20,
        marginBottom:20
    },

    scoreBox:{
        backgroundColor:"#fff",
        borderRadius:8,
        paddingHorizontal:20,
        paddingVertical:8,
        alignItems:"center"
    },

    scoreBoxMe:{
        backgroundColor:"#f2b237",
        borderRadius:8,
        paddingHorizontal:20,
        paddingVertical:8,
        alignItems:"center"
    },

    scoreText:{
        fontSize:35,
        color:"#000",
        fontWeight:"800"
    },

    scoreName:{
        fontSize:18,
        color:"#252525"
    },

    resetButon:{
        width:"100%",
        alignItems:"center",
        justifyContent:"flex-end"
    },

    //spacing
    py1:{
        paddingHorizontal:10
    },

    py2:{
        paddingHorizontal:10
    },

    py3:{
        paddingHorizontal:20
    },

    my1:{
        marginVertical:10
    },

    my2:{
        marginVertical:15
    },

    mx1:{
        marginHorizontal:10
    },

    mx2:{
        marginHorizontal:15
    },

    mx3:{
        marginHorizontal:20
    },

    mt1:{
        marginTop:10
    },

    mt2:{
        marginTop:15
    },

    mt3:{
        marginTop:20
    },

    mt4:{
        marginTop:30
    },

    mt5:{
        marginTop:50
    }
})

export default styles;