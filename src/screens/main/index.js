// index.js
import { useContext, useState } from "react";
import { ActivityIndicator, FlatList, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SearchInput from "../../components/SearchInput";
import { DataContext } from "../../context";

export default function MainScreen({ navigation }) {
    const { data, isDone } = useContext(DataContext);
    const [searchTerm, setSearchTerm] = useState('');

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Details', { item: item })}>
            <View style={styles.header}>
                <Image source={{ uri: item.image }} style={styles.image} />
            </View>
            <View style={styles.body}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.detailsText}>Tap to details</Text>
            </View>
        </TouchableOpacity>
    );

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <KeyboardAvoidingView
            style={styles.main}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <SearchInput value={searchTerm} onChangeText={setSearchTerm} />
            <View style={styles.center}>
                {!isDone && <ActivityIndicator size={'large'} />}
                {isDone && (
                    <View style={styles.list}>
                        <FlatList
                            data={filteredData}
                            renderItem={renderItem}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            initialNumToRender={10}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                )}
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#f5f5f5',
    },
    center: {
        width: '100%',
        height: 425,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        width: '80%',
        height: 425,
        marginHorizontal: 5,
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
    detailsText: {
        margin: 4,
        color: '#FFF',
        textDecorationLine: 'underline',
        textAlign: 'center',
        opacity: 0.5,
    },
});
