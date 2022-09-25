import {Component} from "react";
import "./itemStyle.css"

class TodoItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            onEdit:false,
            editValue: this.props.info,
            done:this.props.done
        }
    }
    deleteItem = ()=>{
        this.props.deleteItem(this.props.id)
    }
    editItem = ()=>{

        this.setState({
            onEdit : !this.state.onEdit,
        })

    }
    changeCheck= ()=>{
        this.setState({
        done:!this.state.done,})
        
        this.props.doneToggle(this.props.id)
        
    }
    
    render() {
        return(
            <div className="todoItem">
                <div className="info">
                <input defaultChecked={this.state.done} onChange={this.changeCheck}  type="checkbox"/>
                    {this.props.index}. {  this.state.onEdit ? <input onChange={(e)=>{this.setState({
                        editValue:e.target.value,
                    })}} value={this.state.editValue} type="text" /> : this.state.editValue }
                </div>
                <div className="buttons">
                    <button onClick={this.editItem}>{this.state.onEdit?"submit":"Edit"}</button>
                    <button onClick={this.deleteItem}>Delete</button>
                </div>
            </div>
        )
    }
}
export default TodoItem;