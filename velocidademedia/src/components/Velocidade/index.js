import React, { useState } from "react"

const Velocidade = (props) => {
    const [distancia, setDistancia] = useState()
    const [tempo, setTempo] = useState()
    const [velocidadeMedia, setVelocidadeMedia] = useState()

    const handleChangeDistancia = (event) => {
        let newDistancia = event.target.value
        setDistancia(newDistancia)

    }

    const handleChangeTempo = (event) => {
        let newTempo = event.target.value
        setTempo(newTempo)
    }

    const OnClickCalcular = () => {
        let newVelocidadeMedia = distancia / tempo
        setVelocidadeMedia(newVelocidadeMedia)
    }

    const OnClickLimpar = () => {
        setDistancia("")
        setTempo("")
        setVelocidadeMedia("")
    }



    return(
        <div>
            <h1>
            {props.name}
            </h1>

            <form>
                <input type="number" placaeholder="Distância"
                    value={distancia}
                    onChange={handleChangeDistancia}
                />
                <input type="number" placeholder="Tempo"
                    value={tempo}
                    onChange={handleChangeTempo}               
                />
                <input type="number" placeholder="Velocidade Média" readOnly
                    value={velocidadeMedia}
                />
                <button type="button" onClick={OnClickCalcular}>
                    Calcular
                </button>

                <button type="button" onClick={OnClickLimpar}>
                    Limpar
                </button>
            </form>

        </div>

    )

}

export default Velocidade