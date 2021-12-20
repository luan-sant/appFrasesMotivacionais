import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default function frasesMotivacionais() {

const [img, setImg] = useState (require ('./src/fechado.png'))
const [textoFrase, setTextoFrase ] = useState ('')

// ARRAY
let frases = [
  'A persistência é o caminho do êxito.',
  'As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.',
  'Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.',
  'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.',
  'No meio da dificuldade encontra-se a oportunidade.',
  'Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.',
  'Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.',
  'A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.',
  'Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.',
  'É parte da cura o desejo de ser curado.',
  'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
];


//FUNÇÃO PARA ESCOLHER AS FRASES
function quebraBiscoito (){
  let numeroAleatorio = Math.floor(Math.random() * frases.length)
  
  setTextoFrase (' "' + frases[numeroAleatorio] +'" ' );
  setImg (require ('./src/aberto.png'))
}

function reiniciar (){
  setImg (require ('./src/fechado.png'))
  setTextoFrase ('');
}

 return (
   // VISUALIAÇÃO TELAS
   <View style={styles.container}>
     
    <Image 
      source={img}
      style={styles.img}
    /> 

    <Text style={styles.text}>{textoFrase}</Text>

    <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}> 
      <View style={styles.btnArea}>
        <Text style={styles.btnTexto}> VER FRASE </Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.botao} onPress={reiniciar}S> 
      <View style={styles.btnArea}>
        <Text style={styles.btnTexto}> REINICIAR </Text>
      </View>
    </TouchableOpacity>

    
   </View>
  );
}

// ESTILOS
const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#f1faee'
  },

  img : {
    width: 230,
    height: 230,
  },

  text : {
    fontSize :20,
    color : '#1d3557',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },

  botao : {
    width: 230,
    height: 50,
    borderColor: '#1d3557',
    borderWidth:2,
    borderRadius: 25,
    marginTop: 15,

  },

  btnArea : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnTexto : {
    fontSize :20,
    fontWeight: 'bold',
    color : '#1d3557',
  }
})