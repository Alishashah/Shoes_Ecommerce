import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AdminModal({ show, close, formdata,save }) {
  return (
    <>
      <Modal show={show} onHide={close} style={{marginTop:"200px"}}>
        <Modal.Header closeButton>
          <Modal.Title>Edit form</Modal.Title>
        </Modal.Header>
        <Modal.Body>{formdata}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={save}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AdminModal;