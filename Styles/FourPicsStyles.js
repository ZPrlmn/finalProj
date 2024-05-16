import { StyleSheet } from "react-native";

const FourPicsStyles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover'
    },
    timerContainer:{
        position: 'absolute',
        top: 20,
        left: 20,
        backgroundColor: 'gray',
        borderRadius: 100,
        height: 35,
        width:35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    timer:{
        fontSize: 18,
        
    },
    levelContainer:{
        backgroundColor: 'gray',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2
    },
    level:{
        color: 'white',
        fontSize: 20
    },
    card:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%',
    },
    imageContainer:{
        width: '90%',
    },
    imageRow:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    image:{
        width: 160,
        height: 160,
    },



    btnText:{
        color:'white',
        fontSize: 40
    },
    buttonContainer:{
        flexDirection: 'row',
        marginBottom: 3,
        justifyContent: 'space-between',
        minWidth: 220
    },
    button1:{
        backgroundColor: 'blue',
        padding: 5,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    btnImage:{
        height: 20,
        width: 20,
    },
    buttonText:{
        color: 'white',
        fontSize: 20,
    },
    btnCheck:{
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        paddingHorizontal: 10,
        width: 170
    },
    btnFinish:{
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        paddingHorizontal: 10,
        width: 220
    },
    checkAnswer:{
    },
    correctAnswer:{
        backgroundColor: '#29af34',
        borderColor: 'green'
    },
    wrongAnswer:{
        backgroundColor: '#b30600',
        borderColor: 'red',
    },
    resultText:{
        color: 'white'
    },
    modalContainer:{
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalBody:{
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        padding: 1
    },
    bgModal:{
        padding: 10,
    },
    modalText:{
        fontSize: 35
    },
    modalButtonContainer:{
    },
    buttonModal:{
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'green',
        width: 200,
        marginBottom: 2
    },
    buttonModalHome:{
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'red',
        width: 200
    },
    buttonModalText:{
        fontSize: 23,
        fontWeight: '900'
    },
})

export default FourPicsStyles