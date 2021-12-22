import React from "react";
import ReactAutocomplete from "react-autocomplete";
import API from "../../utils/API";

//need to pass down all recipe titles

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  render() {
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
      </>
    );
  }
}

export default Autocomplete;
