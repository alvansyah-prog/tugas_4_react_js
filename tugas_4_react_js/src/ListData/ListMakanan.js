import React,{Component} from "react";

class ListMakanan extends Component{
  constructor(props){
    super(props);
    this.state={
      datalist:this.props.Gambar
    };
  }
  render(){
    return(
      <div>
      <img src={this.state.datalist} alt="Product Makanan" width="200" height="150"/>
      </div>
    );
  }
}
export default ListMakanan;
