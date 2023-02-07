// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   Grid,
//   TextField,
//   DialogActions,
//   Button,
// } from "@mui/material";
// import { React, useState } from "react";

// function SolutionDialog(props) {
//   const [solution, setsolution] = useState();

//   const handleSolution = (e) => {
//     setsolution({
//       solution: e.target.value,
//     });
//     console.log("sandeep", solution);
//   };

//   return (
//     <Dialog open={props.open} aria-labelledby="form-dialog-title">
//       <DialogTitle id="form-dialog-title">
//         {" "}
//         What solution have you given here ?{" "}
//       </DialogTitle>{" "}
//       <DialogContent>
//         <Grid item xs>
//           <TextField
//             id="solution"
//             label="Write Here..."
//             multiline
//             rowsMax="10"
//             value={solution}
//             onChange={handleSolution}
//             className="width-100"
//             margin="normal"
//           />
//         </Grid>{" "}
//       </DialogContent>{" "}
//       <DialogActions>
//         <Button
//           onClick={() =>
//             this.props.submitSolution(solution, latitude, longitude)
//           }
//           color="primary"
//         >
//           Submit Solution{" "}
//         </Button>{" "}
//       </DialogActions>{" "}
//     </Dialog>
//   );
// }

// export default SolutionDialog;
