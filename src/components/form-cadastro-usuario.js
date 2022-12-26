import React from 'react';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso } from '../components/toastr';
import { mensagemErro } from '../components/toastr';
import {  Link  } from "react-router-dom";

class FormCadastroUsuario extends React.Component {
  state = {
    nome: '',
    celular: '',
    email: '',
    senha: '',
    senhaRepeticao: '',
  };

  cadastrar = () => {
    if(this.state.senha === this.state.senhaRepeticao){
      mensagemSucesso(`Usuário ${this.state.nome} cadastrado com sucesso!`);  
    }
    else{
      mensagemErro('As senhas informadas são diferentes.')
    }
  };

  cancelar = () => { 
    this.setState({nome: '',
      celular: '',
      email: '',
      senha: '',
      senhaRepeticao: ''
    });
  };

  getTo = (toName) => {
    return window.location.pathname === toName ? true : false
    }

  render() {
    return (
      <div className='container py-5 h-100'>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <Card title='Cadastro de Usuário'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='bs-component'>
                    <FormGroup label='Nome: *' htmlFor='inputNome'>
                      <input
                        type='text'
                        id='inputNome'
                        value={this.state.nome}
                        className='form-control'
                        name='nome'
                        autoComplete="nope"
                        onChange={(e) => this.setState({ nome: e.target.value })}
                      />
                    </FormGroup>
                    <FormGroup label='Celular: *' htmlFor='inputTelefone'>
                      <input
                        type='text'
                        id='inputCelular'
                        value={this.state.celular}
                        className='form-control'
                        name='celular'
                        autoComplete="nope"
                        onChange={(e) => this.setState({ celular: e.target.value })}
                      />
                    </FormGroup>
                    <FormGroup label='Email: *' htmlFor='inputEmail'>
                      <input
                        type='email'
                        id='inputEmail'
                        value={this.state.email}
                        className='form-control'
                        name='email'
                        autoComplete="nope"
                        onChange={(e) => this.setState({ email: e.target.value })}
                      />
                    </FormGroup>
                    <FormGroup label='Senha: *' htmlFor='inputSenha'>
                      <input
                        type='password'
                        id='inputSenha'
                        value={this.state.senha}
                        className='form-control'
                        name='senha'
                        autoComplete="nope"
                        onChange={(e) => this.setState({ senha: e.target.value })}
                      />
                    </FormGroup>
                    <FormGroup label='Repita a Senha: *' htmlFor='inputRepitaSenha'>
                      <input
                        type='password'
                        id='inputRepitaSenha'
                        value={this.state.senhaRepeticao}
                        className='form-control'
                        name='senha'
                        autoComplete="nope"
                        onChange={(e) =>
                          this.setState({ senhaRepeticao: e.target.value })
                        }
                      />
                    </FormGroup>
                    <Stack spacing={1} direction='row' style={{marginTop: '20px'}}>
                      <button
                        onClick={this.cadastrar}
                        type='button'
                        className='btn btn-success'
                      >
                        Salvar
                      </button>
                      {/* <button
                        onClick={this.cancelar}
                        type='button'
                        className='btn btn-danger'
                      >
                        Cancelar
                      </button> */}

                        <Link className='btn btn-danger' to={this.getTo('/') ?  '#': '/'  }>Cancelar</Link>


                    </Stack>
                  </div>
                </div>
              </div>
            </Card>
        </div>
        </div>
      </div>
    );
  }
}

export default FormCadastroUsuario;