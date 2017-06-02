import React, { Component } from 'react';
import Portada from './components/Portada.jsx';
import Guitarras from './components/Guitarras.jsx';
import Footer from './components/Footer.jsx';

/*Assets*/
// import logoPortada from './images/invie.png';
// import acustica from './images/invie-acustica.png';
// import classic from './images/invie-classic.png';

// // const data ={
//    menu: [
//             {
//                 href:'index.html',
//                 title:'Home',
//             },
//             {
//                 href:'#guitarras',
//                 title:'Guitarras',
//             },
//             {
//                 href:'precios.html',
//                 title:"Don't click me",
//             }
//         ],
//       logoPortada: logoPortada,
//       guitarras: [
//             {
//                 image: acustica,
//                 alt: 'Guitarra Invie Acústica',
//                 name: 'Invie Acústica',
//                 width:350,
//                 features: [
//                     'Estilo vintage',
//                     'Madera pura',
//                     'Incluye estuche invisible de aluminio',
//                 ]
//             },
//             {
//                 image: classic,
//                 alt: 'Guitarra Invie Classic',
//                 name: 'Invie Classic',
//                 width:420,
//                 features: [
//                     'Estilo vintage',
//                     'Liviana',
//                     'Empieza tu camino como rockstar',
//                 ]
//             }
//         ]
// // }


class App extends Component {
  render() {
    return (
      <section className="Invie">
        {/*Portada*/}
        {/*<Portada menu={data.menu} logo={data.logoPortada}/>*/}
        <Portada />
        {/*Guitarras*/}
        {/*<Guitarras guitarras={data.guitarras}/> */}
        <Guitarras />
        {/*Footer*/}
        <Footer />
      </section>
    );
  }
}

export default App;
