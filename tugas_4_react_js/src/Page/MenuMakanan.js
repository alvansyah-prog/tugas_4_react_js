import React,{Component} from "react";
import ListMakanan from "../ListData/ListMakanan"

class MenuMakanan extends Component{
  constructor(props){
    super(props);
    this.state={

      pesan:"",jumlah:0,
      tampil:true
    };
    this.NasiPadang=this.NasiPadang.bind(this);
    this.Sate=this.Sate.bind(this);
    this.Soto = this.Soto.bind(this);
    this.Uduk= this.Uduk.bind(this);
    this.Kuning=this.Kuning.bind(this);
    this.Batal=this.Batal.bind(this);
    this.PilihPesanan=this.PilihPesanan.bind(this);

  }

  PilihPesanan(value,e){
    this.setState({[value]:e.target.value})
  }

  NasiPadang(){
    this.setState({
      pesan:"Nasi Padang",
      jumlah: this.state.jumlah + 1,
      tampil: true
    });
  }

  Sate(){
    this.setState({
      pesan:"Sate",
      jumlah:this.state.jumlah+1,
      tampil:true
    });
  }

  Soto(){
    this.setState({
      pesan:"Soto",
      jumlah:this.state.jumlah+1,
      tampil:true
    });
  }
  Uduk(){
    this.setState({
      pesan:"Nasi Uduk",
      jumlah:this.state.jumlah+1,
      tampil:true
    });
  }
  Kuning(){
    this.setState({
      pesan:"Nasi Kuning",
      jumlah:this.state.jumlah+1,
      tampil:true
    });
  }
  Batal(){
    this.setState({
      pesan:"",
      jumlah:0,
      tampil:false
    });
  }

  render(){
    return(
      <div>
      <h3>Daftar Makanan Yang Kami Sediakan</h3>
      <table>
        <tbody>
          <td>
            <ListMakanan Gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
              <center>
                <button onClick={this.NasiPadang}>Pesan Sekarang</button>
              </center>
          </td>
          <td>
            <ListMakanan Gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
              <center>
                <button onClick={this.Sate}>Pesan Sekarang</button>
              </center>
          </td>
          <td>
            <ListMakanan Gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
              <center>
                <button onClick={this.Soto}>Pesan Sekarang</button>
              </center>
          </td>
          <td>
            <ListMakanan Gambar="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
              <center>
                <button onClick={this.Uduk}>Pesan Sekarang</button>
              </center>
          </td>
          <td>
            <ListMakanan Gambar="https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg"/>
              <center>
                <button onClick={this.Kuning}>Pesan Sekarang</button>
              </center>
          </td>
        </tbody>
      </table>
      <br/>
      <input type="text" placeholder="Masukkan Pesanan Anda" onChange={e=> this.PilihPesanan("pesan",e)}/>
      <input type="number" placeholder="Jumlah Pesanan Anda" onChange={e=>this.PilihPesanan("jumlah",e)}/>
      <button onClick={this.Batal}>Batalkan Semua Pesanan</button>

      {this.state.tampil === true ? (
        <div>
          <h3>Pesanan Anda : {this.state.pesan} </h3>
          <h4>Jumlah Pesanan:{this.state.jumlah}</h4>
        </div>
      ):(
        <h1>
        <center>Anda Belum Memesan</center>
        </h1>
      )}

      </div>
    );
  };
}
export default MenuMakanan;
