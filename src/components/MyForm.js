import React, { Component } from 'react';

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'abc',
            fruits: 'orange',
            message: ''
        }
        this.fruits = [
            { 'name': 'Orange', 'value': 'orange' },
            { 'name': 'Apple', 'value': 'apple' },
            { 'name': 'Banana', 'value': 'banana' },
        ]
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const target = event.target,
            value = target.type === 'checkbox' ? target.checked : target.value,
            name = target.name
            

            this.setState({
                [name]: value,
                
                
            })
    }
    render() {
        const { state } = this;
        return (
            <form>
                <label>
                    Nome:
                    <input type="text" name="name" value={state.name} onChange={this.handleChange} />
                </label><br />
                Mensagem:
                <label>
                    <textarea name="message" value={state.message} onChange={this.handleChange} />
                </label><br />
                <label>
                    Fruta:
                <select name="select" value={state.fruit} onChange={this.handleChange}>
                        {this.fruits.map(fruit => <option value={fruit.value}>{fruit.name}</option>)}
                    </select>
                </label><br />
                <input type="submit" value="Enviar" />
            </form>
        )
    }
}

export default MyForm;