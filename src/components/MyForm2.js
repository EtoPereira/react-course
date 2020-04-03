import React, { Component } from 'react';
import { stat } from 'fs';

class MyForm2 extends Component {
    constructor(props) {
        super(props);

        this.inputName = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this)
        
        this.state = {
            list: [],
        }
    }

    handleSubmit(event){
        console.log(this.inputName.current.value); 
        event.preventDefault();
        fetch(`https://api.github.com/search/repositories?q=${this.inputName.current.value}`)
        .then(response=>response.json())
        .then(data => {
            console.log(data)
            this.setState({
                list:data.items
            })
        })
    }


    render() {
        const { state } = this;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome:
                    <input  type="text" name="name" ref={this.inputName}/>
                </label><br />
                <input type="submit" value="Enviar"/>

                <ul>
                    {state.list.map(item=><li>{item.full_name}</li>)}
                </ul>
            </form>
            
        )
    }
}

export default MyForm2;