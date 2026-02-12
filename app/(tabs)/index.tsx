import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={{backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12}}>
      <Text style={{ color: '#0a55b2', fontSize: 33, fontWeight: 700}}>Entrar</Text>
      
      <TextInput style={{ backgroundColor: '#fff',borderWidth: 1, borderColor: '#ccc', borderRadius: 25, width: '80%', height: 45}}/>
      
      <TextInput style={{ backgroundColor: '#fff',borderWidth: 1, borderColor: '#ccc', borderRadius: 25, width: '80%', height: 45}}/>

      <TextInput style={{ backgroundColor: '#fff',borderWidth: 1, borderColor: '#ccc', borderRadius: 25, width: '80%', height: 45}}/>
      <TouchableOpacity style={{ backgroundColor: '#1f1ce4',borderRadius: 25, width: '80%', height: 45, marginBottom: 10, justifyContent: 'center', alignItems: 'center', marginVertical: 10}}>
        <Text style={{ color: '#fff', }}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{color: '#0a55b2', fontWeight: 400}}>
          Esqueceu a senha?
        </Text>
      </TouchableOpacity>
      <View  style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity>
        <Text style={{color: '#0a55b2', fontWeight: 600}}>
          Não possui uma conta? <Text style={{ color: '#258d46', }}>Criar conta</Text>
        </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
