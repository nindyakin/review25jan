import React from 'react';

export default class Ujian extends React.Component {

  state = {
    
  }

  constructor(){ 
    super()
    this.update_kata = this.update_kata.bind(this);
  }

  update_kata (p) {
    this.setState({nama:p.target.value});
  }

render() {
  return (
    <div className="App">
      <h1>Ini Tes Bilangan</h1>
      <input type="text" value={this.state.nama} onChange={this.update_kata}></input>
      <select className="Opsi">
        <option value="basis-2">Basis 2</option>
        <option value="basis-5">Basis 5</option>
        <option value="basis-8">Basis 8</option>
        <option value="basis-12">Basis 12</option>
        <option value="basis-16">Basis 16</option>
        <option value="basis-16">Terbilang</option>
      </select>
      <br></br>
      <br></br>
      <h2>Hasil : {this.state.nama}</h2>
    </div>
    
  );
}

}
