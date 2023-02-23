import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import CommentIcon from "@mui/icons-material/Comment";
import Cookies from "universal-cookie";
import axios from "axios";

function TicketCommets(props) {
  const [currentTicket] = useState(props.currentTicket);
  const [allComments, setAllComments] = useState("");
  const [writeComment, setWriteComment] = useState("");

  // url: "http://barcodesystem.in/upgradecrm/restapi/tickets.php?action=addcomment",

  const ticketfilter = (e) => {
    axios({
      method: "post",
      url: "http://barcodesystem.in/upgradecrm/restapi/tickets.php?action=getcomments",
      data: currentTicket,
    })
      .then((response) => {
        if (response.data.success === true) {
          //console.log(response);
          setAllComments(response.data.data);
        } else {
          //console.log(response.data.msg);
          setAllComments("");
        }
      })
      .catch(function (error) {
        alert("Something went wrong! Please refresh the page");
      });
  };

  useEffect(() => {
    ticketfilter();
  }, []);
  const handleComment = (event) => {
    event.preventDefault();
    setWriteComment(event.target.value);
  };

  const postComment = (event) => {
    event.preventDefault();
    let cookies = new Cookies();
    let user_id = null;

    if (
      localStorage.getItem("id") != null &&
      localStorage.getItem("user_name") != null
    ) {
      user_id = localStorage.getItem("id");
      //user_name = localStorage.getItem('user_name');
    } else if (cookies.get("id") && cookies.get("user_name")) {
      user_id = cookies.get("id");
      //user_name = cookies.get('user_name');
    }

    axios({
      method: "post",
      url: "http://barcodesystem.in/upgradecrm/restapi/tickets.php?action=addcomment",
      data: {
        comment: {
          comment: writeComment,
        },
        id: user_id,
        ticketData: currentTicket,
      },
    })
      .then((response) => {
        if (response.data.success === true) {
          setAllComments(response.data.data);
          setWriteComment("");
        } else {
          console.log(response.data.msg);
          setAllComments("");
        }
      })
      .catch(function (error) {
        alert("Something went wrong! Please refresh the page");
      });
  };
  return (
    <Box width="100%" className="grid-container">
      <Grid container spacing={1}>
        <Grid item xs={12} key="1">
          <Card className="">
            <CardContent>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item xs className="flex-1">
                  <TextField
                    id="write comment"
                    label="Comment Here"
                    multiline
                    rowsMax="10"
                    value={writeComment}
                    onChange={handleComment}
                    className="width-100"
                    margin="normal"
                    width={1}
                  />{" "}
                </Grid>{" "}
                <Grid item xs={1} className="min-width-60">
                  <Button
                    variant="contained"
                    color="secondary"
                    className="round-send-button"
                    onClick={postComment}
                  >
                    <Icon className=""> send </Icon>{" "}
                  </Button>{" "}
                </Grid>{" "}
              </Grid>{" "}
            </CardContent>{" "}
          </Card>{" "}
        </Grid>{" "}
        <Grid item xs={12} key="2">
          <Card>
            <CardContent>
              {" "}
              {allComments ? (
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={2}
                >
                  {" "}
                  {allComments.map((leadComment) => (
                    <Grid
                      item
                      xs={12}
                      className="comment-list-item"
                      key={leadComment.modcommentsid}
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                    >
                      <Grid
                        item
                        xs={1}
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <CommentIcon />
                      </Grid>{" "}
                      <Grid
                        item
                        xs
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                      >
                        &nbsp;{" "}
                        <Typography variant="body1" component="span">
                          {" "}
                          {leadComment.commentcontent}{" "}
                        </Typography>{" "}
                      </Grid>{" "}
                    </Grid>
                  ))}{" "}
                </Grid>
              ) : (
                <Grid
                  item
                  xs
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Typography variant="body1" component="span">
                    {" "}
                    didn 't find any Comments for this lead
                  </Typography>{" "}
                </Grid>
              )}
            </CardContent>{" "}
          </Card>{" "}
        </Grid>{" "}
      </Grid>{" "}
    </Box>
  );
}

export default TicketCommets;
