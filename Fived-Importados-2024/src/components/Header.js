import { StyleSheet, Text, View, Pressable, StatusBar,Platform } from 'react-native'
import { colors } from '../global/colors'
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = ({title}) => {
return (
    <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
    </View>
)
}

export default Header

const styles = StyleSheet.create({
    container:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: colors.green2,
        width: "100%",
        height: 90,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    text:{
        fontSize:25,
        fontFamily: 'MontserratRegular'
    },
    iconBack:{
        position: "absolute",
        left: 20,
    }
})