import React from "react";
import Modal from "../../ui/Modal.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";
import Button from "../../ui/Button.jsx";

const AddCabin = () => {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      {/*<Modal.Open opens="table">*/}
      {/*  <Button>Show table</Button>*/}
      {/*</Modal.Open>*/}
      {/*<Modal.Window name="table">*/}
      {/*  <CabinTable />*/}
      {/*</Modal.Window>*/}
    </Modal>
  );
};

export default AddCabin;
