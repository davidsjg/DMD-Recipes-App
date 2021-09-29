import React from "react";
import ReactAutocomplete from "react-autocomplete";
import Button from "react-bootstrap/Button";
import RecipeContext from "../utils/RecipeContext";

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  render() {
    function handleClick(props) {
      // return <h1>Hello, {props.name}</h1>;
      console.log(this.props);
    }
    return (
      <>
        <ReactAutocomplete
          items={this.props.recipeTitles}
          shouldItemRender={(item, value) =>
            item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
          }
          getItemValue={(item) => item.label}
          renderItem={(item, highlighted) => (
            <div
              key={item.id}
              style={{ backgroundColor: highlighted ? "#eee" : "transparent" }}
            >
              {item.label}
            </div>
          )}
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
          onSelect={(value) => this.setState({ value })}
        />
        {/* <Button onClick={handleClick}>SUP YALL</Button> */}
      </>
    );
  }
}

export default Autocomplete;
