// Menu.js

import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    
    // Bind the handleClick function to the current value of this
    this.handleClick = this.handleClick.bind(this);
  }

  // New function to handle click events
  handleClick(e) {
    // Extract the text of the clicked radio button
    const text = e.target.value;
    
    // Call the passed-in chooseVideo function with the extracted text as an argument
    this.props.chooseVideo(text);
  }

  render() {
    return (
      <div>
        {/* Attach the handleClick function to the onClick event */}
        <form onClick={this.handleClick}>
          <input type="radio" name="src" value="fast" /> fast
          <input type="radio" name="src" value="slow" /> slow
          <input type="radio" name="src" value="cute" /> cute
          <input type="radio" name="src" value="eek" /> eek
        </form>
      </div>
    );
  }
}

export default Menu;
