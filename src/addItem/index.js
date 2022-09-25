import { Component } from "react";
import "./style.css"
class AddItem extends Component{
    constructor(props){
        super(props)
        this.state ={
            inputValue : ""
        }
    }
    inputChange = (e)=>{
        this.setState({
            inputValue:e.target.value,
        })
    }
    addItem = ()=>{
        this.props.addItem(this.state.inputValue);
        this.setState({
            inputValue:""
        })
    }
    render(){
        return(
            <div className="header">
                    <input value={this.state.inputValue} onInput={this.inputChange}  placeholder="type new todo" />
                    <button onClick={this.addItem} > Add</button>
                </div>
        )
    }
}
export default AddItem