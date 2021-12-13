import React, { useState, useEffect } from "react";
import { Fab, Modal, Box } from "@material-ui/core";
import { getPosts } from "../../actions/posts";
import { useDispatch } from "react-redux";
import Form from "../Form/Form";

const CreateButton = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <div>
      <Fab
        variant="extended"
        color="primary"
        aria-label="add"
        style={{
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 20,
          left: "auto",
          position: "fixed",
          marginBottom: 10,
          backgroundColor: "#7B1FA2",
        }}
        onClick={handleOpen}
      >
        New Memory
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            //width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Box>
      </Modal>
    </div>
  );
};
export default CreateButton;
