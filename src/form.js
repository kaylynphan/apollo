import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', artist: '', album: '', review: ''};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleArtistChange = this.handleArtistChange.bind(this);
    this.handleAlbumChange = this.handleAlbumChange.bind(this);
    this.handleReviewChange = this.handleReviewChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleArtistChange(event) {
    this.setState({artist: event.target.value});	
  }
  handleAlbumChange(event) {
    this.setState({album: event.target.value});
  }
  handleReviewChange(event) {
    this.setState({review: event.target.value});
  }

  handleSubmit(event) {
    alert('Name: ' + this.state.name + '\n' + 'Artist: ' + this.state.artist + '\n' + 'Album: ' + this.state.album + '\n' + 'Review: ' + this.state.review);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: 
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
	<div>
	  <label>
	    Artist:  
	    <input type="text" value={this.state.artist} onChange={this.handleArtistChange} />
	  </label>
	</div>
	<div>
          <label>
            Album:  
            <input type="text" value={this.state.album} onChange={this.handleAlbumChange} />
          </label>
        </div>
	<label>
	  Review:         
	</label>
	<div>
          <textarea
            value={this.state.review}
            onChange={this.handleReviewChange}
	    rows={5}
            cols={40}
	    maxLength="85"
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
} 

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
