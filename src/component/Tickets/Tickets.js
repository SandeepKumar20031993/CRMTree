// import { React, useState } from "react";
// import {
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   CardActionArea,
//   Typography,
//   Divider,
//   Dialog,
//   AppBar,
//   Toolbar,
// } from "@mui/system";
// import CloseIcon from "@mui/icons-material/Close";
// import IconButton from "@mui/material/IconButton";
// import ViewTicket from "./ViewTicket";

// function Tickets() {
//   // const [AllTicket, setAllTicket] = useState([]);
//   // const [AllTicketStatus, setAllTicketStatus] = useState([]);
//   const [open, setOpen] = useState("");
//   const [currentTicket, setcurrentTicket] = useState([]);
//   // const [currentLeadStatus, setcurrentLeadStatus] = useState("");
//   const [filterbyassignee, setfilterbyassignee] = useState("all");
//   const [filter, setFilter] = useState("all");
//   // const [isDatewiseDialogOpen, setisDatewiseDialogOpen] = useState("false");
//   // const [allAssignee, setallAssignee] = useState([]);

//   const handleStatusFilter = (e) => {
//     setFilter({
//       filter: e.target.value,
//       filterbyassignee: "all",
//     });
//   };

//   const handleAssigneeFilter = (e) => {
//     console.log(e);
//     setfilterbyassignee({
//       filterbyassignee: e.target.value,
//       filter: "all",
//     });
//   };

//   const handleClose = () => {
//     setOpen({
//       currentTicket: "",
//       open: true,
//     });
//   };

//   return (
//     <Box width="100%" className="grid-container">
//       {" "}
//       {/*** Select Ticket Filter***/}
//       <Grid container spacing={1}>
//         <Grid item xs={6}>
//           <Card className="width-100">
//             <CardContent>
//               <FormControl className="width-100">
//                 <InputLabel htmlFor="filter-tickets">
//                   {" "}
//                   Filter by status:{" "}
//                 </InputLabel>{" "}
//                 <Select
//                   value={filter}
//                   onChange={handleStatusFilter}
//                   inputProps={{
//                     name: "filter",
//                     id: "filter-tickets",
//                   }}
//                 >
//                   <MenuItem value="all"> Recent 100 </MenuItem>{" "}
//                   {AllTicketStatus.map((ticketData) => (
//                     <MenuItem
//                       key={ticketData.ticketstatus_id}
//                       value={ticketData.ticketstatus}
//                     >
//                       {" "}
//                       {ticketData.ticketstatus}{" "}
//                     </MenuItem>
//                   ))}{" "}
//                 </Select>{" "}
//               </FormControl>{" "}
//             </CardContent>{" "}
//           </Card>{" "}
//         </Grid>{" "}
//         <Grid item xs={6}>
//           <Card className="width-100">
//             <CardContent>
//               <FormControl className="width-100">
//                 <InputLabel htmlFor="filter-assignee-tickets">
//                   {" "}
//                   Filter by assignee:{" "}
//                 </InputLabel>{" "}
//                 <Select
//                   value={filterbyassignee}
//                   onChange={handleAssigneeFilter}
//                   inputProps={{
//                     name: "filter-assignee",
//                     id: "filter-assignee-tickets",
//                   }}
//                 >
//                   <MenuItem value="all"> All User </MenuItem>{" "}
//                   {this.state.allAssignee.map((assignee) => (
//                     <MenuItem key={assignee.id} value={assignee.id}>
//                       {" "}
//                       {assignee.first_name} {assignee.last_name}{" "}
//                     </MenuItem>
//                   ))}{" "}
//                 </Select>{" "}
//               </FormControl>{" "}
//             </CardContent>{" "}
//           </Card>{" "}
//         </Grid>{" "}
//         <Grid item xs={12}>
//           {" "}
//         </Grid>{" "}
//       </Grid>
//       <Grid container spacing={1}>
//         {" "}
//         {this.state.AllTicket.map((ticket) => (
//           <Grid item xs={12} key={ticket.ticketid}>
//             <Card className="">
//               <CardActionArea
//                 onClick={() => {
//                   ViewTicket(ticket);
//                 }}
//               >
//                 <CardContent>
//                   <Typography gutterBottom variant="h6" component="strong">
//                     {" "}
//                     {ticket.accountname}{" "}
//                   </Typography>{" "}
//                   {ticket.accountname ? <Divider /> : <span> </span>}{" "}
//                   <Typography
//                     gutterBottom
//                     variant="body2"
//                     color="textSecondary"
//                     component="p"
//                   >
//                     Ticket#{" "}
//                     <Typography
//                       gutterBottom
//                       variant="subtitle1"
//                       component="strong"
//                       color="textPrimary"
//                     >
//                       {" "}
//                       {ticket.ticket_no}{" "}
//                     </Typography>{" "}
//                   </Typography>{" "}
//                   <Typography
//                     gutterBottom
//                     variant="body2"
//                     color="textSecondary"
//                     component="p"
//                   >
//                     Contact Name:{" "}
//                     <Typography
//                       gutterBottom
//                       variant="body1"
//                       component="strong"
//                       color="textPrimary"
//                     >
//                       {" "}
//                       {ticket.firstname} {ticket.lastname}{" "}
//                     </Typography>{" "}
//                   </Typography>{" "}
//                   <Typography
//                     gutterBottom
//                     variant="body2"
//                     color="textSecondary"
//                     component="p"
//                   >
//                     Contact Number:{" "}
//                     <Typography
//                       gutterBottom
//                       variant="body1"
//                       component="strong"
//                       color="textPrimary"
//                     >
//                       {" "}
//                       {ticket.mobile ? ticket.mobile : ticket.phone}{" "}
//                     </Typography>{" "}
//                   </Typography>{" "}
//                   <Typography
//                     gutterBottom
//                     variant="body2"
//                     color="textSecondary"
//                     component="p"
//                   >
//                     Status:{" "}
//                     <Typography
//                       gutterBottom
//                       variant="body1"
//                       component="strong"
//                       color="textPrimary"
//                     >
//                       {" "}
//                       {ticket.status}{" "}
//                     </Typography>{" "}
//                   </Typography>{" "}
//                   <Typography
//                     gutterBottom
//                     variant="body2"
//                     color="textSecondary"
//                     component="p"
//                   >
//                     Priority:{" "}
//                     <Typography
//                       gutterBottom
//                       variant="body1"
//                       component="strong"
//                       color="textPrimary"
//                     >
//                       {" "}
//                       {ticket.priority}{" "}
//                     </Typography>{" "}
//                     & nbsp; & nbsp; Severity:{" "}
//                     <Typography
//                       gutterBottom
//                       variant="body1"
//                       component="strong"
//                       color="textPrimary"
//                     >
//                       {" "}
//                       {ticket.severity}{" "}
//                     </Typography>{" "}
//                   </Typography>{" "}
//                   <Typography
//                     variant="body2"
//                     color="textSecondary"
//                     component="p"
//                   >
//                     Assigned to:{" "}
//                     <Typography
//                       gutterBottom
//                       variant="body1"
//                       component="strong"
//                       color="textPrimary"
//                     >
//                       {" "}
//                       {ticket.first_name} {ticket.last_name}{" "}
//                     </Typography>{" "}
//                   </Typography>{" "}
//                 </CardContent>{" "}
//               </CardActionArea>{" "}
//             </Card>{" "}
//           </Grid>
//         ))}{" "}
//       </Grid>
//       <Dialog
//         fullScreen
//         open={open}
//         onClose={handleClose}
//         // TransitionComponent={Transition}
//       >
//         <AppBar className="">
//           <Toolbar>
//             <IconButton
//               edge="start"
//               color="inherit"
//               onClick={handleClose}
//               aria-label="Close"
//             >
//               <CloseIcon />
//             </IconButton>{" "}
//             <Typography variant="h6" className="">
//               {" "}
//               {currentTicket.ticket_no}{" "}
//             </Typography>{" "}
//           </Toolbar>{" "}
//         </AppBar>{" "}
//         <ViewTicket
//           currentTicket={currentTicket}
//           allTicketStatus={AllTicketStatus}
//         />{" "}
//       </Dialog>
//     </Box>
//   );
// }

// export default Tickets;
