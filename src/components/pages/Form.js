import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    alert("Thanks for the input!");
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
          Message:
          <input type="text" name="message" />
          Email:
          <input type="text" name="email" />
          Website: (optional)
          <input type="text" name="website" />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}
export default Form;
