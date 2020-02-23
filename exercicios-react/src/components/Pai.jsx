import React from 'react'
import Filho from './Filho'

export default props => {
    const notificacaoSaidaDoFilho =
        lugar => alert(`Liberando para ${lugar}`)
    return (
        <div>
            <Filho notificarSaida={notificacaoSaidaDoFilho} />
        </div>
    )
}