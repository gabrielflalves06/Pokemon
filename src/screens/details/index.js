import { StyleSheet, Text, View } from "react-native";

export default function DetailScreen({ navigation, pokemon }) {
    return (
        <View styles={styles.main}>
            <Text>Pokemon Details</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
    },
})