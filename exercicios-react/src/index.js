import React from 'react'
import ReactDOM from 'react-dom'
import Familia from './components/Familia'
import FamiliaSilva from './components/FamiliaSilva'
import Membro from './components/Membro'
import ComponenteComFuncao from './components/ComponenteComFuncao'
import Pai from './components/Pai'
//import Contador from './components/Contador'
import Hook from './components/Hook'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Hook />
        {/* <Contador numero={0} /> */}
        {/* <Familia sobrenome="Silva">
            <Membro nome="Daniela" />
            <Membro nome="Pedro" />
        </Familia> */}
    </div>
    , elemento)