import React from 'react';
import {
 
  StyleSheet,
  Button,
  useColorScheme,
  View,
  NativeModules
} from 'react-native';

const {ToastModule}=NativeModules

const App =() => {
  const isDarkMode = useColorScheme() === 'dark';

  const showToast=()=> {
    ToastModule.ToastMessage();
  }

  return (
    <View style={styles.container} >
       <Button style={styles.button}
        title="Click Me"
        onPress={showToast}
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
 
  button:{
 
    elevation:1,
    color:'red',
    width:'100%',
    
    alignItems: 'center',
    justifyContent: 'center',
},

})

export default App;
