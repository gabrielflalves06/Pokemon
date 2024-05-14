import { Button, Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from 'react';

export default function OpeningScreen({ navigation }) {
    return (
        <ImageBackground
            source={require('../../../assets/images/pokemon.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Image
                        source={require('../../../assets/images/logo_png.png')}
                        style={{ width: 100, height: 50, margin: 25 }}
                    />
                    <Text style={styles.text}>
                        Pokémon é uma franquia de mídia criada pela Nintendo, Game Freak e Creatures. Ela gira em torno de criaturas chamadas Pokémon, que são capturadas e treinadas por treinadores para batalhar uns contra os outros. O objetivo principal dos treinadores é se tornar um Mestre Pokémon, completando a Pokédex (uma enciclopédia de Pokémon) e vencendo as ligas Pokémon. A franquia inclui jogos de videogame, desenhos animados, filmes, trading card game, brinquedos e uma variedade de outros produtos. Pokémon é uma das franquias mais populares e lucrativas do mundo, cativando fãs de todas as idades desde sua criação em 1996.
                    </Text>
                </View>
                <Button
                    title="Conhecer Pokémons!!"
                    onPress={() => {
                        navigation.navigate('Main')
                    }}
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // ou 'contain' para ajustar a imagem
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    textContainer: {
        alignItems: 'center',
    },
    text: {
        marginBottom: 20,
        textAlign: 'justify',
        fontSize: 16,
    },
});
