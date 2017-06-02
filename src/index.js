import React from 'react';
import ReactDOM from 'react-dom';
import Invie from './Invie';
import './css/invie.css';
import './css/animations.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

/*Assets*/
import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';
import easterA from './images/easter-a.png';
import easterB from './images/easter-b.png';
import logoPlatzi from './images/platzi.png';

import cheet from 'cheet.js';


const initialState ={
   menu: [
            {
                href:'index.html',
                title:'Home',
            },
            {
                href:'#guitarras',
                title:'Guitarras',
            },
            {
                href:'precios.html',
                title:"Don't click me",
            }
        ],
      logoPortada: logoPortada,
      guitarras: [
            {
                image: acustica,
                alt: 'Guitarra Invie Acústica',
                name: 'Invie Acústica',
                width:350,
                features: [
                    'Estilo vintage',
                    'Madera pura',
                    'Incluye estuche invisible de aluminio',
                ]
            },
            {
                image: classic,
                alt: 'Guitarra Invie Classic',
                name: 'Invie Classic',
                width:420,
                features: [
                    'Estilo vintage',
                    'Liviana',
                    'Empieza tu camino como rockstar',
                ]
            }
        ],
        isAnimated : false,
}

function reducer (state, action) {
  switch(action.type) {
    case 'UPDATE_PROPS' :{
      const newProps = action.payload.props;
      return { ...state, ...newProps }
    }
    default:
      return state
  }
}

const store = createStore(reducer, initialState);

const easter = {
  menu: [
    {

    },
  ],
  guitarras: [
    {
                image: easterA,
                alt: 'Guitarra padre de famila',
                name: 'Invie Familiar',
                width:350,
                features: [
                    'Listo para imitar a los simpsons',
                    'Aire puro',
                    'Chistes malos',
                ]
            },
            {
                image: easterB,
                alt: 'Guitarra Invie Anime',
                name: 'Invie Anime',
                width:420,
                features: [
                    'Estilo vintage',
                    'Liviana',
                    'Empieza tu camino como rockstar',
                ]
            }
  ],
  isAnimated: 'is-animated',
  logoPortada: logoPlatzi,
}

cheet('ctrl a' ,() => {
  store.dispatch({
    type:'UPDATE_PROPS',
    payload: {
      props: easter
    }
  });
});

cheet('g o b a c k' ,() => {
  store.dispatch({
    type:'UPDATE_PROPS',
    payload: {
      props: initialState
    }
  });
});

ReactDOM.render(
  <Provider store={store}>
    <Invie />
  </Provider>,
  document.getElementById('root')
);
