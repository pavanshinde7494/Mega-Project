import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { useState } from "react";
import { 
  StyleSheet , 
  View , 
  Text , 
  Image , 
  ScrollView,
  Dimensions, 
  FlatList,
  TouchableOpacity
} from "react-native"
import ProfileWindow from '../components/ProfileWindow';
 import color from '../constants/color'

const {width} = Dimensions.get('window');
const height = width*1.5 ;
 
const images = [
  'http://twocircles.net/wp-content/uploads/2019/08/IMG-20190810-WA0029-485x1024.jpg',
  'https://www.chinimandi.com/wp-content/uploads/2019/08/9087a3ca-kolhapur-sangli-maharashtra-india-floods-2019.jpg',
  'https://www.newsclick.in/sites/default/files/styles/responsive_885/public/2020-10/maha%20crops%204.jpg?itok=YMVan2IH'

]
  
export default function HomeScreen() {
  const [active , setActive] =  useState(0);


  const changeActiveState = ({nativeEvent})=>{
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if(slide !== active){
      setActive(slide)
    }
  }

  return (
    <ScrollView>

    <View >
      <ScrollView 
        pagingEnabled 
        horizontal 
        style = {{width , height : height }} 
        onScroll = {changeActiveState}
        showsHorizontalScrollIndicator = {false}
      >
        {
          images.map((image  , index)=>{
            return (
            <View>
              <Image
                key={index}
                source={{uri : image}}
                style={{width ,height , resizeMode : 'cover'}}
              />
              <View style={{  position : 'absolute' , top : 3*height/4 , width :'100%' }}>
                <View style = {{marginHorizontal : '5%'}}>
                  <Text style={styles.imageText}>Warning People Before Natural Calamity</Text>
                </View>
              </View>
            </View>)
          })
        }


      </ScrollView> 



        <View style={styles.indicator}> 
        {
           images.map((i,k)=>{
            return <Text key={k} style={k === active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
           })
        }
         

      </View> 

      <View style = {styles.teamSection}>
        <Text style = {styles.teamText}>
          The Team
        </Text>



        <View style = {{flexDirection : 'row'}}>
          <ProfileWindow imgSrc = {require('../assets/Team/pavan.jpg')} linkedinUrl = "https://www.linkedin.com/in/pavan-shinde7494/" gmail = "pavanshinde7494@gmail.com" />
          <ProfileWindow imgSrc = {require('../assets/Team/pavan.jpg')} linkedinUrl = "" gmail = "" />
        </View>

        <View style = {{flexDirection : 'row'}}>
          <ProfileWindow imgSrc = {require('../assets/Team/pavan.jpg')} linkedinUrl = "" gmail = "" />
          <ProfileWindow imgSrc = {require('../assets/Team/pavan.jpg')} linkedinUrl = "" gmail = "" />
        </View>


        


        </View>
        
        
      </View>
    
    </ScrollView> 

    

    

        /* Team Section */


    

    // 
    
    //  </ScrollView> 
      
      
  )
}


const styles = StyleSheet.create({
    imageText : {
      textAlign : 'center' ,
      fontSize : 25 , 
      color : color.primary , 
      fontFamily : 'merriweather' 
    },

    indicator : {
      flexDirection : 'row' , 
      position : 'absolute' , 
      top : height - 40 , 
      alignSelf : 'center' 
    },
    pagingText : {
      color : '#888'  , 
      margin : 3 
    },
    pagingActiveText : {
      color : '#fff'  , 
      margin : 3 
    },

    teamSection : {
      marginTop : '20%',
      margin:  '10%'
    },
    teamText : {
      fontSize : 30,
      color : 'black',
      fontFamily : 'merriweather'  ,
      marginBottom : '5%' 
    },

    imageStyle : {
      width : '70%' , 
      height : null , 
      aspectRatio : 0.6 ,
      flex : 1 , 
      resizeMode : 'cover', 
      borderRadius : 20  
    },
    profileStyle : { 
      width : '100%',
      aspectRatio : 2.5 , 
      backgroundColor : color.tertiary , 
      opacity : 0.7  , 
      position : 'absolute' , 
      bottom : '0%',
      borderBottomLeftRadius : 20 ,
      borderBottomRightRadius : 20,
  
    }
})