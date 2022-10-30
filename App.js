import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground} from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground 
        source={require('./assets/Icons/menu_light.png')}
        style={styles.leftbutton}>
        </ImageBackground>
        <ImageBackground 
        source={require('./assets/Icons/sun.png')}
        style={styles.rightbutton}>
        </ImageBackground>
        <Text style = {styles.title}>
            ensom
        </Text>
      </View>
      <View style={styles.body}>
        <ImageBackground
          source={require('./assets/Profiles/mtl.jpg')}
          style={styles.image}>
          <Text style={styles.nameTag}>MTL</Text>
          <Text style={styles.location}>1 mile away</Text>
        </ImageBackground>
      </View>
      <View style={styles.footer}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxStyle: {
    position: 'relative',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#ecf0f1',
  },
  flex: {
    display: 'flex',
    flex: 1,
    width: '100%',
    padding: '1rem',
  },
  header: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: '#ecf0f1',
  },
  title: {
    margin: 24,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#ecf0f1',
    fontFamily: 'SydneyBold',
  },
  body: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: '#ecf0f1',
    paddingBottom: 240,
  },
  footer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: 'black',
  },
  image: {
    height: 380,
    width: 380,
  },
  leftbutton: {
    height: 50,
    width: 50,
    flexDirection: 'row',
    alignItems: 'flex-start',
    right: 100,
    bottom: -105,
  },
  rightbutton: {
    height: 50,
    width: 50,
    flexDirection: 'row',
    alignItems: 'flex-start',
    right: -200,
    bottom: -65,
  },
  nameTag: {
    color: 'white',
    fontSize: 32,
    textAlign: 'left',
    fontFamily: 'Sydney',
    marginLeft: 10,
    marginTop: 5,
  },
  location: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Sydney',
    marginLeft: 10,
    marginTop: 300,
  },

});