import React, { Component } from 'react';

export class Aluno extends Component {
    displayName = Aluno.name

    constructor(props) {
        super(props);
        this.state = { alunos: [], loading: true };

        fetch('api/Aluno/GetAluno')
            .then(response => response.json())
            .then(data => {
                this.setState({ alunos: data, loading: false });
            });
    }

    static renderAlunoTable(alunos) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Registro Academico</th>
                        <th>CPF</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map(aluno =>
                        <tr key={aluno.idaluno}>
                        <td>{aluno.idaluno}</td>
                        <td>{aluno.registroacademico}</td>
                        <td>{aluno.cpf}</td>
                        <td>{aluno.nome}</td>
                        </tr>
                )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Aluno.renderAlunoTable(this.state.alunos);
        return (
            <div>
                <h1>Alunos Matriculados</h1>
                <p>Buscando dados no banco via EntityFramework Core.</p>
                {contents}
            </div>
        );
    }
}
