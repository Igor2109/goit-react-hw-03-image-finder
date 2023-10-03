// import React, { Component } from 'react';
// import axios from 'axios';

// export class Searchbar extends Component {
//   state = {
//     query: '', // Початковий стан для пошукового запиту
//     images: []  // Початковий стан для отриманих картинок
//   };

//   handleInputChange = (event) => {
//     this.setState({ query: event.target.value });
//   };

//   handleSearch = () => {
//     const { query } = this.state;
//     const API_KEY = '38948286-ca97297e9309afc5c94bc1b14'; // Замініть на ваш API-ключ
//     const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&per_page=10`;

//     axios.get(API_URL)
//       .then(response => {
//         this.setState({ images: response.data.hits });
//       })
//       .catch(error => {
//         console.error('Error fetching images:', error);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           placeholder="Search for images"
//           value={this.state.query}
//           onChange={this.handleInputChange}
//         />
//         <button onClick={this.handleSearch}>Search</button>

//         <div>
//           {this.state.images.map(image => (
//             <img key={image.id} src={image.webformatURL} alt={image.tags} />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// ;