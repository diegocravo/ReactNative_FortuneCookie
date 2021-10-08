import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  const frases = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite  em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.',
    'A vida trará coisas boas se tiveres paciência.',
    'Não compense na ira o que lhe falta na razão.',
    'Não há que ser forte. Há que ser flexível.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Siga os bons e aprenda com eles.',
    'Uma bela flor é incompleta sem suas folhas.',
    'Faça pequenas coisas agora e maiores coisas lhe serão confiadas cada dia.',
    'A sorte favorece a mente bem preparada.',
    'Espere pelo mais sábio dos conselhos: o tempo.',
    'Se você se sente só é porque construiu muros ao invés de pontes.',
    'Vencer é 90 por cento suor e 40 por cento técnica.',
  ];

  const quebraBiscoito = () => {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setImg(require('./src/biscoitoAberto.png'));
    setTextoFrase(`"${frases[numeroAleatorio]}"`);
  };

  const reiniciarBiscoito = () => {
    setImg(require('./src/biscoito.png'));
    setTextoFrase('');
  };

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
      <Text style={styles.frase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, {marginTop: 15, borderColor: '#121212'}]}
        onPress={reiniciarBiscoito}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, {color: '#121212'}]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 230,
    height: 230,
  },
  frase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});

export default App;
