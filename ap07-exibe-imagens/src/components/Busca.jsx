// rcc
import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'

export default class Busca extends Component {

  state = {
    termoDeBusca: ''
  }

  onTermoAlterado = (evento) => {
    this.setState({
      termoDeBusca: evento.target.value
    })
  }

  onFormSubmit = (evento) => {
    evento.preventDefault()
    this.props.onBuscaRealizada(this.state.termoDeBusca)
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className='flex flex-column'>
          <IconField iconPosition='left'>
            <InputIcon className='pi pi-search'/>
            <InputText 
              className='w-full'
              value={this.state.termoDeBusca}
              placeholder='O que deseja ver...?'
              onChange={this.onTermoAlterado}/>
          </IconField>
          <Button 
            label='OK'
            className='p-button-outlined mt-2'/>
        </div>
      </form>
    )
  }
}
