import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Header from './src/components/Header';
import { DataProvider } from './src/context';
import MainScreen from './src/screens/main';
import DetailScreen from './src/screens/details';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
          <Stack.Screen
            name='Main'
            component={MainScreen}
            options={{
              headerTitle: (props) => <Header {...props} />,
            }}
          />
          <Stack.Screen
            name='Details'
            component={DetailScreen}
            options={{
              headerTitle: (props) => <Header {...props} />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flex: 0.1,
    backgroundColor: 'blue',
  },
})

// export default function App() {

//   const [data, setData] = useState();
//   const [code, setCode] = useState();
//   const [name, setName] = useState();
//   const [description, setDescription] = useState();
//   const [price, setPrice] = useState();
//   const [image, setImage] = useState();

//   useEffect(() => {
//     setData(json);
//     setCode(json.at(0).codigo);
//     setName(json.at(0).nome);
//     setDescription(json.at(0).descricao);
//     setPrice(formatPrice(json.at(0).preco));
//     setImage(json.at(0).imagem);
//   }, []);

//   function formatPrice(price) {
//     return `R$ ${Number(price).toFixed(2)}`.replace('.', ',');
//   }

//   const renderItem = ({ item }) => {
//     return (
//       <TouchableOpacity onPress={() => {
//         setCode(item.codigo);
//         setName(item.nome);
//         setDescription(item.descricao);
//         setPrice(formatPrice(item.preco));
//         setImage(item.imagem);
//       }}>
//         <Image style={styles.item_img} source={item.imagem} />
//       </TouchableOpacity>
//     )
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.header_text}>Cardápio</Text>
//       </View>
//       <View style={styles.image_container}>
//         <Image style={styles.image} source={image} />
//       </View>
//       <View style={styles.description_container}>
//         <View style={styles.description_div}>
//           <Text style={styles.description_div_text1}>{code} {name}</Text>
//           <Text style={styles.description_div_text2}>{description}</Text>
//         </View>
//         <Text style={styles.description_price}>{price}</Text>
//       </View>
//       <View style={styles.footer}>
//         <View style={styles.list_container}>
//           <FlatList
//             horizontal
//             data={data}
//             renderItem={renderItem}
//           />
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flex: 0.19,
//     backgroundColor: '#c2c2c2',
//     width: '100%',
//     justifyContent: 'center',
//   },
//   header_text: {
//     color: '#000',
//     marginLeft: 20,
//     marginTop: 15,
//     fontSize: 25,
//     fontWeight: 'bold',
//   },
//   image_container: {
//     flex: 0.75,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//   },
//   description_container: {
//     flex: 0.21,
//     backgroundColor: '#c2c2c2',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   description_div: {
//     gap: 10,
//     marginLeft: 15,
//     marginTop: 12,
//   },
//   description_div_text1: {
//     fontWeight: 'bold',
//     fontSize: 25,
//     overflow: 'scroll',
//     textAlign: 'left',
//     width: 270,
//   },
//   description_div_text2: {
//     fontWeight: '400',
//     fontSize: 20,
//     overflow: 'scroll',
//     textAlign: 'left',
//     width: 270,
//   },
//   description_price: {
//     marginRight: 15,
//     marginTop: 12,
//     fontWeight: '400',
//     fontSize: 25,
//     overflow: 'scroll',
//     textAlign: 'right',
//   },
//   footer: {
//     flex: 0.5,
//     backgroundColor: '#FFF',
//   },
//   list_container: {
//     maxHeight: 200,
//     width: '100%',
//     backgroundColor: '#dbdbdb',
//   },
//   item_img: {
//     width: 100,
//     height: 100,
//     margin: 18,
//     borderRadius: 100,
//     backgroundColor: 'blue',
//   },
// });
