import React, { useState } from "react";
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
// import Axios from "axios";
// import Cookies from "universal-cookie";

function LeadComments() {
  const [writeComment, setWriteComment] = useState();
  const allComments = [];
  const currentLead = currentLead;

  const handleComment = (e) => {
    e.preventDefault();
    setWriteComment({
      writeComment: e.target.value,
    });
  };

  const postComment = (e) => {
    e.preventDefault();
    let cookies = new Cookies();
    let user_id = null;
    let user_name = null;

    console.log(user_id);
    axios({
      method: "post",
      url: this.postCommentApiUrl,
      data: {
        comment: {
          comment: writeComment,
        },
        id: user_id,
        leadData: currentLead,
      },
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
                        & nbsp;{" "}
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
              )}{" "}
            </CardContent>{" "}
          </Card>{" "}
        </Grid>{" "}
      </Grid>{" "}
    </Box>
  );
}

export default LeadComments;
