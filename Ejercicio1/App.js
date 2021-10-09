import React, { useState } from 'react';
import { View, StyleSheet,Image,ScrollView,Text,Modal,Button,TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

function Feed() {
    const [modalc1,setModalc1] = useState(false);
    const [modalc2,setModalc2] = useState(false);
    const [modalc3,setModalc3] = useState(false);
    const [modalc4,setModalc4] = useState(false);
    const [modalc5,setModalc5] = useState(false);
    const [modalc6,setModalc6] = useState(false);
    const [modalr1,setModalr1] = useState(false);
    const [modalr2,setModalr2] = useState(false);
    const [modalr3,setModalr3] = useState(false);
    const [modalr4,setModalr4] = useState(false);
    const [modalr5,setModalr5] = useState(false);
    const [modalr6,setModalr6] = useState(false);
    const [modala1,setModala1] = useState(false);
    const [modala2,setModala2] = useState(false);
    const [modala3,setModala3] = useState(false);
    const [modala4,setModala4] = useState(false);
    const [modala5,setModala5] = useState(false);
    const [modala6,setModala6] = useState(false); 
  return (
    <ScrollView>
    <Modal transparent={true} animationType="slide" visible={modalc1} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Image style={styles.equi1} source={require('./src/soncomo.jpg')} />
      <Text style={styles.subtitulo}>Son como niños</Text>
      <Text style={styles.sinopsis}>La muerte de su entrenador de baloncesto durante su infancia provoca la reunión de algunos viejos amigos, quienes se ven en el lugar en el que celebraron un campeonato años atrás. Los compañeros hablan sobre sus esposas y sus hijos, y descubren que la edad no necesariamente va de la mano con la madurez.</Text>
      <Button title="Cerrar" onPress={()=> {setModalc1(!modalc1)}}></Button>
    </View>
  </View>
  </Modal>

  <Modal transparent={true} animationType="slide" visible={modalc2} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Image style={styles.equi1} source={require('./src/mascara.jpg')} />
      <Text style={styles.subtitulo}>La Máscara</Text>
      <Text style={styles.sinopsis}>Un aburrido empleado de banca encuentra una máscara que representa a Loki, un dios de la malicia y la travesura, la cual le transformará por completo.</Text>
      <Button title="Cerrar" onPress={()=> {setModalc2(!modalc2)}}></Button>
    </View>
  </View>
  </Modal>
  <Modal transparent={true} animationType="slide" visible={modalc3} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Image style={styles.equi1} source={require('./src/misi.jpg')} />
      <Text style={styles.subtitulo}>La otra Missy</Text>
      <Text style={styles.sinopsis}>Tras un intensa relación virtual, un joven decide invitar a la chica de sus sueños a una isla paradisíaca. Sin embargo, cuando se encuentran en persona, ambos se dan cuenta del error que han cometido.</Text>
      <Button title="Cerrar" onPress={()=> {setModalc3(!modalc3)}}></Button>
    </View>
  </View>
  </Modal>
  <Modal transparent={true} animationType="slide" visible={modalc4} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Image style={styles.equi1} source={require('./src/fogel.jpg')} />
      <Text style={styles.subtitulo}>SuperCool</Text>
      <Text style={styles.sinopsis}>os jóvenes están a pocos días de graduarse de la escuela secundaria. Antes de graduarse, los chicos quieren celebrar y perder la virginidad, pero su plan resulta más complicado de lo esperado. </Text>
      <Button title="Cerrar" onPress={()=> {setModalc4(!modalc4)}}></Button>
    </View>
  </View>
  </Modal>
  <Modal transparent={true} animationType="slide" visible={modalc5} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Image style={styles.equi1} source={require('./src/rubias.jpg')} />
      <Text style={styles.subtitulo}>¿Y dónde están las rubias?</Text>
      <Text style={styles.sinopsis}>Dos desafortunados agentes del FBI se hacen pasar por dos chicas, novatas en la alta sociedad para investigar una serie de secuestros. Pero mientras preparan su plan, descubren que irrumpir en la alta sociedad es mucho más duro de lo que creían.</Text>
      <Button title="Cerrar" onPress={()=> {setModalc5(!modalc5)}}></Button>
    </View>
  </View>
  </Modal>
  <Modal transparent={true} animationType="slide" visible={modalc6} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Image style={styles.equi1} source={require('./src/ted.jpg')} />
      <Text style={styles.subtitulo}>Ted</Text>
      <Text style={styles.sinopsis}>Cuando John Bennett era un niño pequeño, pidió el deseo de que Ted, su querido oso de peluche, cobrara vida. Treinta años más tarde, Ted continúa siendo el compañero de John, ante el disgusto de Lori, la novia de John</Text>
      <Button title="Cerrar" onPress={()=> {setModalc6(!modalc6)}}></Button>
    </View>
  </View>
  </Modal>
  <Modal transparent={true} animationType="slide" visible={modalr1} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Image style={styles.equi1} source={require('./src/diario.jpg')} />
      <Text style={styles.subtitulo}>Diario de una Pasion</Text>
      <Text style={styles.sinopsis}>La historia se remonta al verano de 1940 en Seabrook, Carolina del Sur. Allie Hamilton (Rachel McAdams) es una chica de una familia rica que pasa el verano en Seabrook. En el carnaval, Allie conoce a Noah Calhoun (Ryan Gosling), un joven del pueblo que trabaja en la fábrica de madera. Aunque al principio Allie no se interesa por él, Noah insiste en que pasen tiempo juntos y es así como él y Allie se enamoran.</Text>
      <Button title="Cerrar" onPress={()=> {setModalr1(!modalr1)}}></Button>
    </View>
  </View>
  </Modal>
  <Modal transparent={true} animationType="slide" visible={modalr2} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Image style={styles.equi1} source={require('./src/cielo.jpg')} />
      <Text style={styles.subtitulo}>Bajo el mismo cielo</Text>
      <Text style={styles.sinopsis}>Tras pasar muchos años fuera de casa, un ingeniero espacial regresa a su idílico hogar en Hawai con la esperanza de revitalizar su carrera profesional. Allí trabajará junto a una piloto de las fuerzas aéreas que le ayudará a sintonizar con el espíritu de la isla y descubrir la mejor persona que hay dentro de sí mismo.</Text>
      <Button title="Cerrar" onPress={()=> {setModalr2(!modalr2)}}></Button>
    </View>
  </View>
  </Modal>
  <Modal transparent={true} animationType="slide" visible={modalr3} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Image style={styles.equi1} source={require('./src/antes.jpg')} />
      <Text style={styles.subtitulo}>Yo antes de ti</Text>
      <Text style={styles.sinopsis}>Louisa una chica inestable y creativa, reside en un pequeño pueblo de la campiña inglesa. Vive sin rumbo y va de un trabajo a otro para ayudar a su familia a llegar a fin de mes. Sin embargo, un nuevo trabajo pondrá a prueba su habitual alegría. En el castillo local, se ocupa de cuidar y acompañar a Will Traynor, un joven y rico banquero que se quedó paralítico tras un accidente.</Text>
      <Button title="Cerrar" onPress={()=> {setModalr3(!modalr3)}}></Button>
    </View>
  </View>
  </Modal>
  <Modal transparent={true} animationType="slide" visible={modalr4} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Image style={styles.equi1} source={require('./src/boda.jpg')} />
      <Text style={styles.subtitulo}>La boda de mi mejor amigo</Text>
      <Text style={styles.sinopsis}>A sus 27 años, Julianne Potter (Julia Roberts) es una crítica neoyorkina de restaurantes que se encuentra con un amigo de toda la vida llamado Michael O'Neal (Dermot Mulroney) de quien siempre ha estado enamorada, quien le confiesa que va a casarse con Kimberly Wallace (Cameron Díaz). Junto a su mejor amigo George (Rupert Everett), decide evitar la boda a toda costa</Text>
      <Button title="Cerrar" onPress={()=> {setModalr4(!modalr4)}}></Button>
    </View>
  </View>
  </Modal>
  <Modal transparent={true} animationType="slide" visible={modalr5} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Image style={styles.equi1} source={require('./src/lala.jpg')} />
      <Text style={styles.subtitulo}>LA LA LAND</Text>
      <Text style={styles.sinopsis}>La película cuenta la historia de Mia, una empleada de un bar que aspira a ser una gran actriz y Sebastian, un pianista de jazz desempleado con grandes ambiciones.A pesar de sus diferencias y sus distintas personalidades, gracias a una serie de acontecimientos harán que sus caminos acaben cruzándose.</Text>
      <Button title="Cerrar" onPress={()=> {setModalr5(!modalr5)}}></Button>
    </View>
  </View>
  </Modal>
  <Modal transparent={true} animationType="slide" visible={modalr6} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Image style={styles.equi1} source={require('./src/titanic.jpg')} />
      <Text style={styles.subtitulo}>Titanic</Text>
      <Text style={styles.sinopsis}>Jack es un joven artista que gana un pasaje para viajar a América en el Titanic, el transatlántico más grande y seguro jamás construido. A bordo del buque conoce a Rose, una chica de clase alta que viaja con su madre y su prometido Cal, un millonario engreído a quien solo interesa el prestigio de la familia de su prometida. Jack y Rose se enamoran a pesar de las trabas que ponen la madre de ella y Cal en su relación. Mientras, el lujoso transatlántico se acerca a un inmenso iceberg.</Text>
      <Button title="Cerrar" onPress={()=> {setModalr6(!modalr6)}}></Button>
    </View>
  </View>
  </Modal>
  <Modal transparent={true} animationType="slide" visible={modala1} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Image style={styles.equi1} source={require('./src/armados.jpg')} />
      <Text style={styles.subtitulo}>Armados y Peligrosos</Text>
      <Text style={styles.sinopsis}>El agente de la DEA, Bobby Trench, y el oficial de inteligencia de la Armada estadounidense, Marcus Stigman, han estado trabajando juntos de forma encubierta como miembros de un sindicato de narcóticos. Ninguno de ellos sabe que el otro es un agente encubierto. Cuando fracasa su intento por infiltrarse en un cartel mexicano y recuperar millones de dólares, los hombres son desautorizados por sus superiores. Trench y Stigman huyen.</Text>
      <Button title="Cerrar" onPress={()=> {setModala1(!modala1)}}></Button>
    </View>
  </View>
  </Modal>
  <Modal transparent={true} animationType="slide" visible={modala2} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Image style={styles.equi1} source={require('./src/gladiador.jpg')} />
      <Text style={styles.subtitulo}>Gladiador</Text>
      <Text style={styles.sinopsis}>El general romano Máximo es el soporte más leal del emperador Marco Aurelio, que lo ha conducido de victoria en victoria. Sin embargo, Cómodo, el hijo de Marco Aurelio, está celoso del prestigio de Máximo y aún más del amor que su padre siente por él. Cuando Cómodo llega al poder ordena el arresto del general y su asesinato. Máximo escapa de sus asesinos, pero no puede evitar la muerte de su familia. Entonces se convierte en gladiador para llevar a cabo su venganza.</Text>
      <Button title="Cerrar" onPress={()=> {setModala2(!modala2)}}></Button>
    </View>
  </View>
  </Modal>
  <Modal transparent={true} animationType="slide" visible={modala3} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Image style={styles.equi1} source={require('./src/batman.jpg')} />
      <Text style={styles.subtitulo}>Batman:El caballero de la noche</Text>
      <Text style={styles.sinopsis}>Con la ayuda del teniente Jim Gordon y del Fiscal del Distrito Harvey Dent, Batman mantiene a raya el crimen organizado en Gotham. Todo cambia cuando aparece el Joker, un nuevo criminal que desencadena el caos y tiene aterrados a los ciudadanos.</Text>
      <Button title="Cerrar" onPress={()=> {setModala3(!modala3)}}></Button>
    </View>
  </View>
  </Modal>
  <Modal transparent={true} animationType="slide" visible={modala4} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Image style={styles.equi1} source={require('./src/rapidos.jpg')} />
      <Text style={styles.subtitulo}>Rápidos y furiosos 2</Text>
      <Text style={styles.sinopsis}>Cada noche, Los Ángeles es testigo de alguna carrera de coches. Últimamente ha aparecido un nuevo corredor, todos saben que es duro y que es rápido, pero lo que no saben es que es un detective con la determinación de salir victorioso.</Text>
      <Button title="Cerrar" onPress={()=> {setModala4(!modala4)}}></Button>
    </View>
  </View>
  </Modal>
  <Modal transparent={true} animationType="slide" visible={modala5} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Image style={styles.equi1} source={require('./src/kong.jpg')} />
      <Text style={styles.subtitulo}>Godzilla vs Kong</Text>
      <Text style={styles.sinopsis}>Godzilla y Kong, dos de las fuerzas más poderosas de un planeta habitado por aterradoras criaturas, se enfrentan en un espectacular combate que sacude los cimientos de la humanidad. Monarch se embarca en una misión de alto riesgo y pone rumbo hacia territorios inexplorados para descubrir los orígenes de estos dos titanes, en un último esfuerzo por tratar de salvar a dos bestias que parecen tener las horas contadas sobre la faz de la Tierra.</Text>
      <Button title="Cerrar" onPress={()=> {setModala5(!modala5)}}></Button>
    </View>
  </View>
  </Modal>
  <Modal transparent={true} animationType="slide" visible={modala6} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Image style={styles.equi1} source={require('./src/rocki.jpg')} />
      <Text style={styles.subtitulo}>Rocki</Text>
      <Text style={styles.sinopsis}>Rocky Balboa es un desconocido boxeador de Philadelphia a quien se le ofrece la posibilidad de alcanzar la fama y ganar el título mundial de los pesos pesados enfrentándose al actual campeón, Apollo Creed. Con una gran fuerza de voluntad, Rocky se prepara concienzudamente para el combate y también para los cambios que acabarán produciéndose en su vida.</Text>
      <Button title="Cerrar" onPress={()=> {setModala6(!modala6)}}></Button>
    </View>
  </View>
  </Modal>

    <View style={styles.fondo}>
      <View style={{flexDirection:'row'}} > 
        <Image  style={styles.banner}  source={require('./src/logo.png')} /> 
      </View>
      <View>

      <LinearGradient
        // Button Linear Gradient
        //colors={['#FF5733', '#BE3F23', '#781B07']}
        colors={['#162358', '#25418b', '#0862b1']}
        style={styles.button}>
        <View style={styles.linea}><Text style={styles.titulo1}>Comedia</Text></View>
      </LinearGradient>
      <View style={styles.ftexto}>
      <ScrollView horizontal>
        <View>
        <TouchableHighlight onPress={()=>{setModalc1(!modalc1)}}>
        <Image style={styles.equi} source={require('./src/soncomo.jpg')} />
        </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight onPress={()=>{setModalc2(!modalc2)}}>
        <Image style={styles.equi} source={require('./src/mascara.jpg')} />
        </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight onPress={()=>{setModalc3(!modalc3)}}>
        <Image style={styles.equi} source={require('./src/misi.jpg')} />
        </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight onPress={()=>{setModalc4(!modalc4)}}>
        <Image style={styles.equi} source={require('./src/fogel.jpg')} />
        </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight onPress={()=>{setModalc5(!modalc5)}}>
        <Image style={styles.equi} source={require('./src/rubias.jpg')} />
        </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight onPress={()=>{setModalc6(!modalc6)}}>
        <Image style={styles.equi} source={require('./src/ted.jpg')} />
        </TouchableHighlight>
        </View>
      </ScrollView>
      </View>

      <LinearGradient
        // Button Linear Gradient
        //colors={['#FF5733', '#BE3F23', '#781B07']}
        colors={['#162358', '#25418b', '#0862b1']}
        style={styles.button}>
        <View style={styles.linea}><Text style={styles.titulo1}>Romance</Text></View>
      </LinearGradient>
      <View style={styles.ftexto}>
      <ScrollView horizontal>
        <View>
        <TouchableHighlight onPress={()=>{setModalr1(!modalr1)}}>
        <Image style={styles.equi} source={require('./src/diario.jpg')} />
        </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight onPress={()=>{setModalr2(!modalr2)}}>
        <Image style={styles.equi} source={require('./src/cielo.jpg')} />
        </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight onPress={()=>{setModalr3(!modalr3)}}>
        <Image style={styles.equi} source={require('./src/antes.jpg')} />
        </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight onPress={()=>{setModalr4(!modalr4)}}>
        <Image style={styles.equi} source={require('./src/boda.jpg')} />
        </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight onPress={()=>{setModalr5(!modalr5)}}>
        <Image style={styles.equi} source={require('./src/lala.jpg')} />
        </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight onPress={()=>{setModalr6(!modalr6)}}>
        <Image style={styles.equi} source={require('./src/titanic.jpg')} />
        </TouchableHighlight>
        </View>
      </ScrollView>
      </View>

     <LinearGradient
        // Button Linear Gradient
        //colors={['#FF5733', '#BE3F23', '#781B07']}
        colors={['#162358', '#25418b', '#0862b1']}
        style={styles.button}>
        <View style={styles.linea}><Text style={styles.titulo1}>Comedia</Text></View>
      </LinearGradient>
      <View style={styles.ftexto}>
      <ScrollView horizontal>
        <View>
        <TouchableHighlight onPress={()=>{setModala1(!modala1)}}>
        <Image style={styles.equi} source={require('./src/armados.jpg')} />
        </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight onPress={()=>{setModala2(!modala2)}}>
        <Image style={styles.equi} source={require('./src/gladiador.jpg')} />
        </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight onPress={()=>{setModala3(!modala3)}}>
        <Image style={styles.equi} source={require('./src/batman.jpg')} />
        </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight onPress={()=>{setModala4(!modala4)}}>
        <Image style={styles.equi} source={require('./src/rapidos.jpg')} />
        </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight onPress={()=>{setModala5(!modala5)}}>
        <Image style={styles.equi} source={require('./src/kong.jpg')} />
        </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight onPress={()=>{setModala6(!modala6)}}>
        <Image style={styles.equi} source={require('./src/rocki.jpg')} />
        </TouchableHighlight>
        </View>
      </ScrollView>
      </View>

      </View>
      <View style={styles.linea}></View>
    </View>
    </ScrollView>
  );
}

function Profile() {
  return (
    <ScrollView>
    <View style={styles.fondo}>
      <View style={{flexDirection:'row'}} > 
        <Image  style={styles.banner}  source={require('./src/logo.png')} /> 
      </View>
      <View>
      <LinearGradient
        // Button Linear Gradient
        //colors={['#FF5733', '#BE3F23', '#781B07']}
        colors={['#162358', '#25418b', '#0862b1']}
        style={styles.button}>
        <View style={styles.linea}><Text style={styles.titulo1}>Comedia</Text></View>
      </LinearGradient>
      
      <View style={styles.ftexto}>
        <View style={styles.serie}>
          <View >
            <Image style={styles.equi2} source={require('./src/big.jpg')} />
          </View>
          <View style={styles.series}>
            <Text style={styles.subtitulos}>The Big Bang Theory</Text>
            <Text style={styles.sinopsiss}>Dos cerebritos que comparten piso, aunque ambos están doctorados en física teórica, no tienen ni la menor idea de como relacionarse con el resto del mundo, especialmente con las chicas.</Text>
            <Text style={styles.sinopsiss}>Cantidad de Temporadas: 12</Text>
          </View>
        </View>
        <View style={styles.lineas}></View>
      </View>
      <View style={styles.ftexto}>
        <View style={styles.serie}>
          <View >
            <Image style={styles.equi2} source={require('./src/brok.jpg')} />
          </View>
          <View style={styles.series}>
            <Text style={styles.subtitulos}>Brooklyn Nine-Nine</Text>
            <Text style={styles.sinopsiss}>La serie se centra en lo que ocurre cuando un talentoso, pero despreocupado, detective se le asigna un nuevo jefe al que tiene demasiadas cosas que demostrarle.</Text>
            <Text style={styles.sinopsiss}>Temporadas: 8</Text>
          </View>
        </View>
        <View style={styles.lineas}></View>
      </View>
      
      <View style={styles.ftexto}>
        <View style={styles.serie}>
          <View >
            <Image style={styles.equi2} source={require('./src/how.jpg')} />
          </View>
          <View style={styles.series}>
            <Text style={styles.subtitulos}>How I met your mother</Text>
            <Text style={styles.sinopsiss}>Ted (Josh Radnor) les cuenta a sus dos hijos cómo conoció a su madre y cómo fue su vida hasta que, por fin, encontró el amor verdadero. </Text>
            <Text style={styles.sinopsiss}>Cantidad de Temporadas: 9</Text>
          </View>
        </View>
        <View style={styles.lineas}></View>
      </View>
      <View style={styles.ftexto}>
        <View style={styles.serie}>
          <View >
            <Image style={styles.equi2} source={require('./src/serie_c6.jpg')} />
          </View>
          <View style={styles.series}>
            <Text style={styles.subtitulos}>Friends</Text>
            <Text style={styles.sinopsiss}> La serie es una comedia que trata de las aventuras y desventuras de un grupo de 6 amigos que viven en Manhattan, New York, siendo el espectador testigo directo de la evolución en sus vidas.</Text>
            <Text style={styles.sinopsiss}>Cantidad de Temporadas: 10</Text>
          </View>
        </View>
        <View style={styles.lineas}></View>
      </View>

      <LinearGradient
        // Button Linear Gradient
        //colors={['#FF5733', '#BE3F23', '#781B07']}
        colors={['#162358', '#25418b', '#0862b1']}
        style={styles.button}>
        <View style={styles.linea}><Text style={styles.titulo1}>Aventura</Text></View>
      </LinearGradient>
      <View style={styles.ftexto}>
        <View style={styles.serie}>
          <View >
            <Image style={styles.equi2} source={require('./src/serie_a1.jpg')} />
          </View>
          <View style={styles.series}>
            <Text style={styles.subtitulos}>The Mandalorian</Text>
            <Text style={styles.sinopsiss}> Las aventuras de Mando, un pistolero solitario y cazarrecompensas que se abre paso a través de las fronteras más remotas de la galaxia, lejos de la jurisdicción de la Nueva República.</Text>
            <Text style={styles.sinopsiss}>Temporadas: 2</Text>
          </View>
        </View>
        <View style={styles.lineas}></View>
      </View>
      <View style={styles.ftexto}>
        <View style={styles.serie}>
          <View >
            <Image style={styles.equi2} source={require('./src/serie_a2.jpg')} />
          </View>
          <View style={styles.series}>
            <Text style={styles.subtitulos}>Vikingos</Text>
            <Text style={styles.sinopsiss}> Un joven agricultor y hombre de familia se siente frustrado por las políticas de Earl Haraldson. Ragnar continúa luchando hasta que los dos se enfrentan en una batalla por la supremacía.</Text>
            <Text style={styles.sinopsiss}>Temporadas: 6</Text>
          </View>
        </View>
        <View style={styles.lineas}></View>
      </View>
      <View style={styles.ftexto}>
        <View style={styles.serie}>
          <View >
            <Image style={styles.equi2} source={require('./src/serie_a3.jpg')} />
          </View>
          <View style={styles.series}>
            <Text style={styles.subtitulos}>Rick y Morty</Text>
            <Text style={styles.sinopsiss}>Después de haber estado desaparecido durante casi 20 años, Rick llega de imprevisto a la puerta de la casa de su hija y se va a vivir con ella y su familia utilizando el garaje como su laboratorio.</Text>
            <Text style={styles.sinopsiss}>Temporadas: 5</Text>
          </View>
        </View>
        <View style={styles.lineas}></View>
      </View>
      
      <View style={styles.ftexto}>
        <View style={styles.serie}>
          <View >
            <Image style={styles.equi2} source={require('./src/serie_a6.jpg')} />
          </View>
          <View style={styles.series}>
            <Text style={styles.subtitulos}>Loki</Text>
            <Text style={styles.sinopsiss}>Loki, el Dios de las Mentiras, se aleja de la sombra de su hermano para embarcarse en una aventura que se desarrolla tras los acontecimientos de "Vengadores: Endgame".</Text>
            <Text style={styles.sinopsiss}>Temporadas: 1</Text>
          </View>
        </View>
        <View style={styles.lineas}></View>
      </View>

      <LinearGradient
        // Button Linear Gradient
        //colors={['#FF5733', '#BE3F23', '#781B07']}
        colors={['#162358', '#25418b', '#0862b1']}
        style={styles.button}>
        <View style={styles.linea}><Text style={styles.titulo1}>Fantasia</Text></View>
      </LinearGradient>
      
      <View style={styles.ftexto}>
        <View style={styles.serie}>
          <View >
            <Image style={styles.equi2} source={require('./src/serie_f2.jpg')} />
          </View>
          <View style={styles.series}>
            <Text style={styles.subtitulos}>Sweet Tooth</Text>
            <Text style={styles.sinopsiss}>En un mundo postapocalíptico, Gus, un niño mitad humano y mitad ciervo, busca un nuevo comienzo junto a Jeppers, un vagabundo con una vida solitaria.</Text>
            <Text style={styles.sinopsiss}>Temporadas: 1</Text>
          </View>
        </View>
        <View style={styles.lineas}></View>
      </View>
      
      <View style={styles.ftexto}>
        <View style={styles.serie}>
          <View >
            <Image style={styles.equi2} source={require('./src/serie_f4.jpg')} />
          </View>
          <View style={styles.series}>
            <Text style={styles.subtitulos}>The Gifted</Text>
            <Text style={styles.sinopsiss}>Reed, Catilin y sus hijos forman una familia corriente de clase media, pero un día descubren que los chicos tienen poderes. Perseguidos por el Gobierno, se unen a un grupo clandestino de mutantes.</Text>
            <Text style={styles.sinopsiss}>Temporadas: 2</Text>
          </View>
        </View>
        <View style={styles.lineas}></View>
      </View>
      <View style={styles.ftexto}>
        <View style={styles.serie}>
          <View >
            <Image style={styles.equi2} source={require('./src/serie_f5.jpg')} />
          </View>
          <View style={styles.series}>
            <Text style={styles.subtitulos}>The seven deadly sins</Text>
            <Text style={styles.sinopsiss}>La trama principal se sitúa en una época medieval y sigue las aventuras del escuadrón de caballeros conocidos como los siete pecados capitales que actúan como los protectores de Britannia.</Text>
            <Text style={styles.sinopsiss}>Temporadas: 5</Text>
          </View>
        </View>
        <View style={styles.lineas}></View>
      </View>
      <View style={styles.ftexto}>
        <View style={styles.serie}>
          <View >
            <Image style={styles.equi2} source={require('./src/serie_f6.jpg')} />
          </View>
          <View style={styles.series}>
            <Text style={styles.subtitulos}>Arrow</Text>
            <Text style={styles.sinopsiss}>Enfocado en Oliver Queen, y cómo fue cambiado por el tiempo que pasó naufragando en una isla y luego convirtiendose en un héroe luchador disfrazado peleando contra el crimen en Star City.</Text>
            <Text style={styles.sinopsiss}>Temporadas: 8</Text>
          </View>
        </View>
        <View style={styles.lineas}></View>
      </View>

    </View>
    </View>
    </ScrollView>
  );
}

function Notifications(){
  return (
    <ScrollView>
    <View style={styles.fondo}>
      <View style={{flexDirection:'row'}} > 
        <Image  style={styles.banner}  source={require('./src/logo.png')} /> 
      </View>
      <View>
        <LinearGradient
        // Button Linear Gradient
        //colors={['#FF5733', '#BE3F23', '#781B07']}
        colors={['#162358', '#25418b', '#0862b1']}
        style={styles.button}>
        <View style={styles.linea}><Text style={styles.titulo1}>Comedia</Text></View>
      </LinearGradient>

        <View style={styles.ftexto}>
          <View>
          </View>
          <View style={styles.lineas}></View>
        </View>      
        <View style={styles.ftexto}>
          <View style={{flexDirection:'row'}} > 
            <Image  style={styles.partidos}  source={require('./src/armados.jpg')} /> 
          </View>
          <View style={styles.lineas}></View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Movies"
      
    >
      <Tab.Screen
        name="Movies"
        component={Feed} 
        options={{
          tabBarLabel: 'Peliculas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="movie-open-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Series"
        component={Profile}
        options={{
          tabBarLabel: 'Series',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="tv" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Proximamente',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="theater" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({ 
fondo:{
  backgroundColor: '#0862b1',
},
banner:{ 
  height:180,
  flex: 1,
},
titulo:{
  fontWeight:'bold',
  fontSize: 30,
  marginVertical:10,
  alignContent:'center',
  color: 'white',
  marginLeft: 6,
},
titulo1:{
  fontWeight:'bold',
  fontSize: 15,
  marginVertical:10,
  alignContent:'center',
  color: 'white',
  marginLeft: 6,
},
linea:{
  height: 40,
},
lineas:{
  height: 20,
},
ftexto:{
  backgroundColor: '#0862b1',
},
equi:{
  width:150,
  height:200,
  marginRight:2,
  borderRadius: 10,
  marginBottom: 10,
  marginTop: 10,
},
equi1:{
  width:150,
  height:200,
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: 20,
},
equi2:{
  width:125,
  height:225,
  marginRight: 10,
  borderRadius: 10,
},
partidos:{
  height:200,
  width: 330,
},
vistaModal:{
  backgroundColor:'#000000aa',
  flex:1,
},
Modal:{
  backgroundColor:'black',
  margin:20,
  padding:40,
  borderRadius:10,
  flex:1,
  color: 'white',
},
subtitulo: {
  fontWeight:'bold',
  fontSize:16,
  justifyContent:'center',
  color: 'white',
},
subtitulos: {
  fontWeight:'bold',
  fontSize:16,
  justifyContent:'center',
  color: 'white',
  marginLeft: 10,
},
sinopsis: {
  justifyContent: 'center',
  color: 'white',
  marginBottom: 10,
},
sinopsiss: {
  justifyContent: 'center',
  color: 'white',
  marginBottom: 10,
  marginLeft:10,
},
serie: {
  flexDirection: 'row',
  flex: 2,
},
series: {
  backgroundColor: '#25418b',
  width: 175,
}
})
