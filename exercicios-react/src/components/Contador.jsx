import React, { Component } from 'react'

export default class Contador extends Component {
    state = {
        numero: 0
    }


    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
        //this.state.numero++;
    }

    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Incrementar</button>
                <button>Decrementar</button>
            </div>
        )
    }
}

//<button onClick={() => this.maisUm()}>Incrementar</button>

//constructor(props) {
//super(props)
//    this.maisUm = this.maisUm.bind(this)
//}