import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Button, Image, StyleSheet, Text, View } from "react-native";
import { DataContext } from "../../context";
import { TouchableOpacity } from "react-native";

export default function DetailScreen({ route }) {
    const { item } = route.params;
    const [Detalhes, setDetalhes] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [Index, setIndex] = useState(0);
    const { data } = useContext(DataContext);
    const Pokemons = [...data];

    const getData = async (url) => {
        try {
            const response = await fetch(
                `${url}`
            );
            const json = await response.json();
            setDetalhes(json);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData(item.url);
    }, []);

    useEffect(() => {
        setIndex(Detalhes.id - 1)
        console.log(Index)
    }, [Detalhes])

    return (
        <View>
            {isLoading && (
                <View style={styles.loading}>
                    <ActivityIndicator />
                </View>
            )}
            {!isLoading && (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.sectionTitle}>#{Detalhes.id}</Text>
                        <View style={styles.imageContainer}>
                            <TouchableOpacity
                                style={styles.navigationButton}
                                disabled={Index == 0}
                                onPress={() => {
                                    if (Index > 0) {
                                        setIndex(Index - 1);
                                        getData(Pokemons[Index - 1].url);
                                    }
                                }}
                                title="Anterior"
                            >
                                <Image
                                    source={require('../../../assets/images/arrow_left.png')}
                                    style={styles.arrow}
                                />
                            </TouchableOpacity>

                            <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Detalhes.id}.png` }} style={styles.image} />


                            <TouchableOpacity
                                style={styles.navigationButton}
                                disabled={Index >= Pokemons.length - 1}
                                onPress={() => {
                                    if (Index < Pokemons.length - 1) {
                                        setIndex(Index + 1);
                                        getData(Pokemons[Index + 1].url);
                                    }
                                }}
                                title=""
                            >
                                <Image
                                    source={require('../../../assets/images/arrow_right.png')}
                                    style={styles.arrow}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.name}>{Detalhes.name}</Text>
                        <Text style={styles.types}>{Detalhes.types.map((type) => type.type.name).join('/').toUpperCase()}</Text>
                    </View>

                    <View>
                        <Text style={styles.sectionTitle}>Atributos:</Text>
                        {Detalhes.stats.map(stat => (
                            <View style={styles.attributesSection}>
                                <Text style={styles.attributeName}>{stat.stat.name}:</Text>
                                <Text>{stat.base_stat}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            )}
        </View>
    );

}

const styles = StyleSheet.create({

    container: {
        padding: 20,
        paddingVertical: '20%',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    navigationButton: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'gray'
    },
    arrow: {
        width: 25,
        height: 25
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 100,
        backgroundColor: 'white',
        margin: 30,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    attributesSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    attributeName: {
        marginLeft: 10
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
