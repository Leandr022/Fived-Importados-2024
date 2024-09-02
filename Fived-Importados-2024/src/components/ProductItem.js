import { useNavigation } from '@react-navigation/native'
import { Image, Pressable, StyleSheet, Text, useWindowDimensions } from 'react-native'

const ProductItem = ({product}) => {

    const{width, height} = useWindowDimensions()
    const navigation = useNavigation()

return (
    <Pressable style={styles.container} onPress={()=> navigation.navigate("Detail", {id:product.id})}>
        <Text style={[styles.title, width < 300 ? styles.titleMin : styles.titleMax]}>{product.title}</Text>
        <Image
            style={styles.image}
            resizeMode='cover'
            source={{uri:product.thumbnail}}
        />
    </Pressable>
)
}

export default ProductItem

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#DED6B4",
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        width: "90%",
        marginHorizontal: "5%",
        gap: 10,
        borderRadius: 3

    },
    title:{
        width: "70%",
        fontSize: 17
    },
    titleMin:{
        fontSize: 14
    },
    titleMax:{
        fontSize: 20
    },
    image:{
        minWidth:80,
        width:"25vw",
        maxWidth:150,
        minHeight: 80,
        height: "20vw",
        maxHeight: 150,
        borderRadius: 3
    }
})