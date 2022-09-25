import {Component} from "react";
import AddItem from "../addItem";
import Footer from "../footer";
import TodoItem from "../todoItem";
import "./style.css"

class TodoApp extends Component{
    constructor(props) {
        super(props);
        this.myKey = 0;
        this.state ={
            list :[
                {
                    done:false,
                    info:"npx create-react-app todo",
                    id:Math.random(),
                },
                {
                    done:false,
                    info:"cd todo",
                    id:Math.random(),
                },
                {
                    done:false,
                    info:"npm start",
                    id:Math.random()
                },
            ]
        }
    }
     addItem = (value)=>{
        if(value){
            
            this.setState({
                list:[...this.state.list,{
                    done:false,
                    info:value,
                    id:Math.random()
                }]
            })
        }
            
    }
    deleteItem = (id)=>{
        this.setState({
            list: this.state.list.filter((item)=>{
                if(id==item.id) return false;
                else return true;
            })
        })
    }
    deleteAll = ()=>{
        this.setState({
            list:[]
        })
    }
    deleteSelected = ()=>{
        this.setState({
            list: this.state.list.filter(item=>!item.done)
        })
    }
    doneToggle = (id)=>{
       this.setState({
        list: this.state.list.map((item,index)=>{
            if(id==item.id) item.done = !item.done;
            return item;
        })
       })
    }
    render() {
        return (
            <div className="App">
                <h1>TODO</h1>
                <AddItem addItem={this.addItem} />
                {this.state.list.map((item,index)=>
                    <TodoItem deleteItem= {this.deleteItem} doneToggle={this.doneToggle} done={item.done} key={ item.id } index={index+1} id={item.id} info={item.info} />)}
                <Footer deleteAll={this.deleteAll} deleteSelected={this.deleteSelected} />
            </div>
        )
    }
}
export default TodoApp;