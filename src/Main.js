import React from 'react';
import Map from './Map.js'

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchQuery: '',
      city: '',
      showMapAndCity: true,
    }
  }


  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     city: e.target.city.value
  //   });
  // }
   handleInput = e => this.setState ({ searchQuery: e.target.value});

  //  getCityInfo = e => {

  //  }

  render() {
    console.log(this.state);
    return (
      <main>
        <h3>Proof of life in main</h3>
        <form onSubmit={this.getCityInfo}>
          <label>Enter a city to explore
            <input name="city" type="text" onInput={this.handleInput}/>
          </label>
        </form>
        <button >Explore!</button>

        {
          this.state.showMapAndCity &&
          <article>
            <h3>{"CityName"}</h3>
            <img src="" alt="placeholder" />
            <p>name, insert lat and lon</p>
          </article>
        }
      </main>
    );
  }
}

export default Main;