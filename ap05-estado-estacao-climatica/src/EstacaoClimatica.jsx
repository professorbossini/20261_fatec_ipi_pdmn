// rafce
import { useEffect, useState } from 'react'

const EstacaoClimatica = ({icone, estacao, latitude, longitude, obterLocalizacao}) => {
  const [dataAtual, setDataAtual] = useState(null)

  //usar um useEffect para, a cada segundo, extrair a data atual do sistema e atualizar o estado
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer executando...')
      setDataAtual(new Date().toLocaleTimeString())
    }, 1000)
    return () => {
      console.log('timer cancelado')
      clearInterval(timer)
    }
  }, [])
  return (
    <div className="card">
      <div className="card-body">

        <div
          style={{ height: '6rem' }}
          className="d-flex align-items-center">
          {/* i.fa-solid.fa-3x */}
          <i className={`fa-solid fa-3x fa-${icone}`}></i>
          {/* p.w-75.ms-3.text-center.fs-1 */}
          <p className="w-75 ms-3 text-center fs-1">
            {estacao}
          </p>
        </div>

        <div>
          <p className="text-center">
            {
              latitude ?
                `Coordenadas: ${latitude},${longitude}. Data: ${dataAtual}`
              :
                'Clique no botão para ver a sua estação climática.'
            }
          </p>
        </div>
        <button
          className='btn btn-outline-primary w-100 mt-2'
          onClick={() => obterLocalizacao()}>
          Qual a minha estação?
        </button>
      </div>
    </div>
  )
}

export default EstacaoClimatica