// import React from 'react';
// // import { Dropdown } from 'semantic-ui-react';
// // import Select from 'react-select';

// const countryOptions = [
//     { key: 'fr', value: 'fr', flag: 'fr', text: 'French' },
//     { key: 'tr', value: 'tr', flag: 'tr', text: 'Turkish' },
//     { key: 'gr', value: 'gr', flag: 'gr', text: 'Greek' },
//     { key: 'in', value: 'in', flag: 'in', text: 'Indian' },
//     { key: 'ir', value: 'ir', flag: 'ir', text: 'Persian' },
//     { key: 'cn', value: 'cn', flag: 'cn', text: 'Chinese' },
//     { key: 'it', value: 'it', flag: 'it', text: 'Italian' },
//     { key: 'jp', value: 'jp', flag: 'jp', text: 'Japanese' },
//     { key: 'kr', value: 'kr', flag: 'kr', text: 'Korean' },
//     { key: 'my', value: 'my', flag: 'my', text: 'Malaysian' },
//     { key: 'mx', value: 'mx', flag: 'mx', text: 'Mexican' },
//     { key: 'th', value: 'th', flag: 'th', text: 'Tai' },
//     { key: 'tw', value: 'tw', flag: 'tw', text: 'Taiwanese' },
//     { key: 'vn', value: 'vn', flag: 'vn', text: 'Vietnamese' },
// ]


// class DropdownCuisine extends React.Component {
//     state = {
//       selectedOption: null,
//     };
//     handleChange = selectedOption => {
//       this.setState({ selectedOption });
//     };
//     render() {
//       const { selectedOption } = this.state;
   
//       return (
        
//         <Select
//           value={selectedOption}
//           onChange={this.handleChange}
//           options={countryOptions}
//         ><Dropdown/></Select>
//       );
//     }
//   }

// export default DropdownCuisine;