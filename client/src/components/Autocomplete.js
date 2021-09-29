// import React, { Component } from "react";
// import PropTypes from "prop-types";

// export class Autocomplete extends Component {
//   static propTypes = {};

//   constructor(props) {
//     super(props);
//     this.state = {
//       activeSuggestion: 0,
//       filteredSuggestions: [],
//       showSuggestions: false,
//       userInput: "",
//     };
//   }

//   static defaultProperty = {
//     suggestions: [],
//   };

//   render() {
//     return (
//       <Autocomplete
//         getItemValue={(item) => item.label}
//         items={[{ label: "apple" }, { label: "banana" }, { label: "pear" }]}
//         renderItem={(item, isHighlighted) => (
//           <div style={{ background: isHighlighted ? "lightgray" : "white" }}>
//             {item.label}
//           </div>
//         )}
//         value={value}
//         onChange={(e) => (value = e.target.value)}
//         onSelect={(val) => (value = val)}
//       />
//     );
//   }
// }
// export default Autocomplete;
