import { useContext } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DataContext } from "../../context";

export default function MainScreen({ navigation }) {

    const { data, isDone } = useContext(DataContext);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Details')}>
                <View style={styles.header}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.body}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={{
                        margin: 4,
                        color: '#FFF',
                        textDecorationLine: 'underline',
                        textAlign: 'center',
                        opacity: 0.5,
                    }}>Tap to details</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <>
            {!isDone &&
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size={'large'} />
                </View>}
            {isDone &&
                <View style={styles.main}>
                    <View style={styles.list}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            horizontal
                        />
                    </View>
                </View>
            }
        </>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    list: {
        marginTop: 100,
        width: '80%',
        height: 425,
        marginHorizontal: 30,
        backgroundColor: '#ededed',
    },
    card: {
        marginHorizontal: 15,
        width: 300,
        borderRadius: 41.5,
        backgroundColor: '#FFF',
        flexDirection: 'column',
        borderColor: '#ed0000',
        borderWidth: 1.5,
    },
    header: {
        flex: 1.3,
        backgroundColor: '#ffa200',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    body: {
        flex: 0.7,
        alignItems: 'center',
        backgroundColor: '#005bf7',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderTopWidth: 1.5,
        borderTopColor: '#ed0000',
    },
    image: {
        width: '100%',
        height: '100%',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 35,
        textAlign: 'center',
        overflow: 'hidden',
        color: '#ffb700',
        textShadowColor: '#f20000',
        textShadowRadius: 8,
        textShadowOffset: { width: 3, height: 3 },
    },
})