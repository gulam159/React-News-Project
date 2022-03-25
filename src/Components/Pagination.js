// import React, { Component } from 'react'
// import { Link } from 'react-router-dom';

// export class Pagination extends Component {
//   render() {
//       const clickhandler= async()=>{
//         this.setState({
//             idx: this.state.idx+12,
//         })  
//         let idx = idx;
//           idx = idx+12;
//       }
//     return (
//         <div className="container mt-5">
//         <nav aria-label="Page navigation example">
//         <ul className="pagination justify-content-center">
//           <li className="page-item disabled">
//             <a className="page-link" href="#" tabindex="-1">Previous</a>
//           </li>
//           <li className="page-item"><Link className="page-link" to="/" onClick={clickhandler} >this.props.next</Link></li>
//           <li className="page-item"><a className="page-link" href="#">2</a></li>
//           <li className="page-item"><a className="page-link" href="#">3</a></li>
//           <li className="page-item">
//             <a className="page-link" href="#">Next</a>
//           </li>
//         </ul>
//       </nav>
//       </div>
//     )
//   }
// }

// export default Pagination