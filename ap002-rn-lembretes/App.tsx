import { useState } from 'react'

import {
  FlatList,
  Pressable, 
  StyleSheet, 
  Text, 
  TextInput,
  View 
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface Lembrete{
  id?: string;
  texto: string;
}

export default function App() {
  const [lembrete, setLembrete] = useState <Lembrete>({texto: ''})
  const [lembretes, setLembretes] = useState<Lembrete[]> ([])
  const [emModoEdicao, setEmModoEdicao] = useState(false)

  const adicionar = () => {
    //criar um novo lembrete com id e texto
    const novoLembrete : Lembrete = {id: Date.now().toString(), texto: lembrete.texto}
    //atualiza a lista de lembretes
    setLembretes(lembretesAtual => [novoLembrete, ...lembretesAtual])
    //atualiza a variável lembrete
    setLembrete({texto: ''}) 
  }
  const remover = (lembrete: Lembrete) => {
    setLembretes(lembretesAtual => (
      lembretesAtual.filter(item => item.id !== lembrete.id)
    ))
  }
  const atualizar = () => {
    const lembretesAtualizados = lembretes.map( item => {
      if(item.id === lembrete.id)
        return lembrete
      return item
    })
    setLembretes(lembretesAtualizados)
    setEmModoEdicao(false)
    setLembrete({texto: ''})
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input} 
        placeholder='Digite um lembrete...'
        onChangeText={(novoTexto) => setLembrete({ id: lembrete.id, texto: novoTexto})}
        value={lembrete.texto}
      />
      <Pressable
        onPress={emModoEdicao ? atualizar : adicionar}
        style={styles.button}>
        <Text
          style={styles.buttonText}>
          {emModoEdicao ? 'Atualizar lembrete' : 'Salvar lembrete'}
        </Text>
      </Pressable>
      <FlatList
        style={styles.list} 
        data={lembretes}
        renderItem={({item}) => (
          <View
            style={styles.listItem}>
            <Text
              style={styles.listItemText}>
              {item.texto}
            </Text>
            <View
              style={styles.listItemButtons}>
              <Pressable
                onPress={() => remover(item)}>
                <AntDesign 
                  name='delete'
                  size={24}/>
              </Pressable>
              <Pressable
                onPress={() => {
                  setLembrete(item)
                  setEmModoEdicao(true)
                }}>
                <AntDesign 
                  name='edit'
                  size={24}
                />
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '80%',
    backgroundColor: '#0096F3',
    padding: 8,
    borderRadius: 4
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'  
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    textAlign: 'center',
    borderRadius: 4
  },
  list: {
    borderWidth: 1, 
    borderColor: 'black', 
    width: '80%',
    marginTop: 12,
    borderRadius: 4,
    padding: 8
  },
  listItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    backgroundColor: '#F0F0F0',
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '30%'
  },
  listItemText:{
    width: '70%',
    textAlign: 'center',

  }
});
