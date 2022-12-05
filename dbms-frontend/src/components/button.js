import React, {Component} from "react";
class MyButton extends Component{
    constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
      console.log("this is" + this.props.name);
    };
    render() {
      return (
      <this.props.StyleCmpt>
        {/* it is defaulted to capital initial letter for a classNAMe */}
        <button type="button" onClick={this.handleClick}>
        {this.props.name}</button>
      </this.props.StyleCmpt>
  )}
}
export default MyButton;