import { Component } from "react";
import "./footerstyle.css"

class Footer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="footer">
                <button onClick={this.props.deleteAll}>Delete All</button>
                <button onClick={this.props.deleteSelected}>Delete All selected</button>
            </div>
        )
    }
}
export default Footer;