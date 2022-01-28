import {useState} from 'react'
import * as React from 'react';
import { Text, View, Pressable, ScrollView, Image, StyleSheet } from 'react-native'
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

  const styles = StyleSheet.create({
 
  productBox: {
    borderColor: 'black',
    flexDirection: 'column', 
    borderWidth: 0, 
    height: 200, 
    width: 'auto', 
    margin: 18,
    marginLeft: 22, 
    
  },
  image: {
    height:150, 
    width:130, 
   
  },
  imageBox: {
    height: 105,
  },
  previewBox: {
 flexDirection: 'row',
    height: 150, 
    margin: 2, 
    marginBottom: 1, 
    backgroundColor: '#F2F2F2'
  },
  productTitle: {
    textAlign: 'center', 
    margin: 18, 
    fontSize: 16, 
    fontWeight: '400',
  },
  productCost: {
    textAlign: 'center', 
    marginLeft: 40, 
    color: 'black', 
    fontWeight: '300',
    fontSize: 24,
    marginTop: 62, 
     position: 'absolute',
  
  },
  productIncreaseButton: {
    backgroundColor: 'grey', 
    width: 30, 
    position: 'absolute',
     marginTop: 62,
    marginLeft: 100,
    borderRadius: 50
    
  },
  productDecreaseButton: {
    backgroundColor: 'grey', 
    width: 30, 
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 50
  },
  productIncreaseText: {
    color: 'white', 
    fontSize: 22, 
    textAlign: 'center'
  },
  productDecreaseText: {
    color: 'white', 
    fontSize: 22, 
    textAlign: 'center'
  }
});

interface productProps {
  name: string,
  cost: number,
  image: string,
  setNum: Function,
  setCost: Function,
}
const Product: React.FC<productProps> = ({ name, cost, image, setNum, setCost }) => {

  const img = image
  const [count, setCount] = useState<number>(0);

  const productIncrease = () => {
    console.log(name)
    setCount(count+1)
    setNum((prev:any) => prev+1);
    setCost((prev:any)=> prev+cost);
  }

  const productDecrease = () => {
    console.log(name)
    if(count<=0){
      setCount(0)
    }
    else{
      setCount(count-1)
    }
    if(count>0){
      setNum((prev:any) => prev-1);
      setCost((prev:any)=> prev-cost);
    }
    
  }
  
  return(
    <View style = {styles.productBox}>
      <View style={styles.previewBox} >
        <View style = {styles.imageBox}>
          <Image style={styles.image} source={{uri: img}}/>
        </View>
      <View style={{flexDirection: 'column'}}>
      <View>
        <Text style = {styles.productTitle}>{name}  {count>0?"X "+count:null}</Text>
        <Pressable style={styles.productDecreaseButton} onPress={productDecrease}>
          <Text style = {styles.productIncreaseText}>-</Text>
        </Pressable>
        <Pressable style={styles.productIncreaseButton} onPress={productIncrease}>
          <Text style = {styles.productDecreaseText}>+</Text>
        </Pressable>
        <Text style={styles.productCost}>{'$'}{cost}</Text>
      </View>
      </View>
      </View>
    </View>
  )


}


export default Product