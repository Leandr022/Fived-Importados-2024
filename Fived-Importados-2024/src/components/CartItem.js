import { StyleSheet, Text, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { colors } from '../global/colors';


const CartItem = ({item}) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.brand}>{item.brand}</Text>
                <Text style={styles.price}>$ {item.price}</Text>
            </View>
            <MaterialIcons name="delete-forever" size={40} color="black" />
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container:{
        width: "90%",
        marginHorizontal: "5%",
        backgroundColor: colors.green2,
        marginVertical: 10,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 3
    },
    containerText:{
        width: "80%",
        gap: 5
    },
    title:{
        color: "white",
        fontSize: 20
    },
    brand:{
        color: "white",
        fontSize: 16
    },
    price:{
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    }
})