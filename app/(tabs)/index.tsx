import { ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
      <ImageBackground source={require('../../assets/images/Login.png')} resizeMode="cover" style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', paddingTop: 150 }}>

        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', padding: 32, marginTop: Platform.OS === 'ios' ? 20 : 50 }}>
          <Text style={{ color: '#0a55b2', fontSize: 33, fontWeight: 700 }}>Entrar</Text>

          <Text style={{ color: '#0a55b2', fontSize: 16, fontWeight: 700, marginBottom: 10, alignSelf: 'flex-start' }}>Nome</Text>
          <TextInput
            placeholderTextColor="#0a55b2"
            cursorColor={'#0a55b2'}
            selectionColor={'#0a55b2'}
            style={{ height: 40, color: '#0a55b2', fontSize: 14, fontWeight: '500', backgroundColor: 'white', borderRadius: 50, width: '100%', padding: 8, marginBottom: 20, borderWidth: 1, borderColor: '#0a55b2' }}
          />

          <Text style={{ color: '#0a55b2', fontSize: 16, fontWeight: 700, marginBottom: 10, alignSelf: 'flex-start' }}>E-mail</Text>
          <TextInput
            placeholderTextColor="#0a55b2"
            cursorColor={'#0a55b2'}
            selectionColor={'#0a55b2'}
            style={{ height: 40, color: '#0a55b2', fontSize: 14, fontWeight: '500', backgroundColor: 'white', borderRadius: 50, width: '100%', padding: 8, marginBottom: 20, borderWidth: 1, borderColor: '#0e1114ff' }}
          />

          <Text style={{ color: '#0a55b2', fontSize: 16, fontWeight: 700, marginBottom: 10, alignSelf: 'flex-start' }}>Senha</Text>
          <TextInput
            placeholderTextColor="#0a55b2"
            cursorColor={'#0a55b2'}
            selectionColor={'#0a55b2'}
            secureTextEntry
            style={{ height: 40, color: '#0a55b2', fontSize: 14, fontWeight: '500', backgroundColor: 'white', borderRadius: 50, width: '100%', padding: 8, marginBottom: 30, borderWidth: 1, borderColor: '#0a55b2' }}
          />

          <TouchableOpacity activeOpacity={0.8} style={{ backgroundColor: '#0a55b2', borderRadius: 10, width: '100%', padding: 15, marginBottom: 30 }}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 700, textAlign: 'center' }}>Entrar</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
            <TouchableOpacity>
              <Text style={{ color: '#0a55b2', fontSize: 16, fontWeight: 500, paddingBottom: 8 }}>Esqueceu a senha?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: '#0a55b2', fontSize: 16, fontWeight: 500 }}>
                Não possui uma conta?
                <Text style={{ color: '#207d30', fontWeight: 500 }}> Criar Conta</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </ImageBackground>
    </KeyboardAvoidingView>
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
