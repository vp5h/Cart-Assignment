import React, { useState } from 'react'
import { Text, View, Pressable, ScrollView, Image, StyleSheet } from 'react-native'
import { NavigationContainer, NavigationProp, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from './components/Product'
const Stack = createNativeStackNavigator();


const CartContext = React.createContext(null)

export function useCart() {
  return React.useContext(CartContext)
}

export function CartProvider({children}){
    
  const [num, setNum] = useState<number>(0);
  const [cost, setCost] = useState<number>(0);

const value = {
num,
setNum,
cost,
setCost
}
 return(
<CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>


 ) 

}

interface CheckoutProps {
  navigation: NavigationProp<ParamListBase>;
  route: any;
}

const Checkout: React.FC<CheckoutProps> = ({route}) => {

  console.log(route.params)
  // let { number, amount } = route.params;
 let {num, setNum, cost, setCost} = useCart()

  return(
    <ScrollView style={styles.mainPage}>
      <View style = {styles.CheckoutItemBox}>
        <Text style = {styles.CheckoutItem}>Number of Items in Cart: {num}</Text>
      </View>
      <View style = {styles.CheckoutAmountBox}>
        <Text style = {styles.CheckoutAmount}>Total Amount:  {'$'}{cost}</Text>
      </View>
    </ScrollView>
  )
}



interface MainScreenProps {
  navigation: NavigationProp<ParamListBase>;
  route: any,
}

const MainScreen: React.FC<MainScreenProps> = ({navigation}) => {



  let {num, setNum, cost, setCost} = useCart()

  const checkout = () => {
    navigation.navigate('Checkout' );
  }

  return(
    <ScrollView style = {styles.mainPage}>
   
   
        <Product name='Node' cost={150} image='https://res.cloudinary.com/nextecom/image/upload/v1633185811/nextjs_media/sejrf8izhzenjphujgus.jpg' setNum={setNum} setCost = {setCost} />
        <Product name='TS' cost={100} image='https://res.cloudinary.com/nextecom/image/upload/v1635536960/nextjs_media/msqtp21zkjwvzugyjx06.png' setNum={setNum} setCost = {setCost}/>
        <Product name='Next' cost={350} image='https://res.cloudinary.com/nextecom/image/upload/v1633186142/nextjs_media/nlcmhp2skocyeffsoimd.png' setNum={setNum} setCost = {setCost}/>
        <Product name='Jest' cost={200} image='https://res.cloudinary.com/nextecom/image/upload/v1633188638/nextjs_media/lvfz4o2nlkbswpudsumr.png' setNum={setNum} setCost = {setCost} />
        <Product name='Mongo' cost={250} image='https://res.cloudinary.com/nextecom/image/upload/v1633186013/nextjs_media/quntrfwkzmttwxmtksul.png' setNum={setNum} setCost = {setCost} />
        <Product name='Webpack' cost={300} image='https://res.cloudinary.com/nextecom/image/upload/v1633186326/nextjs_media/wussegvfg8chid11oy45.png' setNum={setNum} setCost = {setCost} />
     
    
      
      <Pressable style={styles.mainButton} onPress={checkout}>
        <Text style = {styles.checkOutText}>Move to Cart</Text>
      </Pressable>
    
    </ScrollView>
  )
}

const App: React.FC<{}> = () => {
  return (
    <NavigationContainer>
    <CartProvider>
      <Stack.Navigator>
        <Stack.Screen
          name='MAIN'
          component={MainScreen}
          options={{ title: 'Product Screen', headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name='Checkout'
          component={Checkout}
          options={{ title: 'Checkout', headerTitleAlign: 'center' }}
        />
      </Stack.Navigator>
    </CartProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  checkOutText: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
  },
  CheckoutItemBox: {
    margin: 20, 
    marginTop: 60, 
    borderWidth: 2, 
    height: 300, 
    width: '90%'
  },
  CheckoutItem: {
    color: 'black', 
    fontSize: 26, 
    textAlign: 'center', 
    marginTop: 170, 
    fontWeight: 'bold'
  },
  CheckoutAmountBox: {
    margin: 20, 
    marginTop: 60, 
    borderWidth: 2,
    height: 50, 
    width: '90%', 
    backgroundColor: '#2E7D32', 
    borderColor: '#2E7D32', 
    borderRadius: 10
  },
  CheckoutAmount: {
    color: 'white', 
    fontSize: 18, 
    textAlign: 'center', 
    marginTop: 14
  },
  mainButton: {
    backgroundColor: '#0277BD',
    borderColor: '#0277BD', 
    borderWidth: 1, 
    marginLeft: 30, 
    maxHeight: 100,
    height: 50, 
    width: 'auto',
    margin: 10,
    borderRadius: 10, 
    marginTop: 2,
    padding:6,
  },
  mainPage: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#ffff'
  }
});

export default App;