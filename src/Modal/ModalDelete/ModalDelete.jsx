import React from 'react'
import './ModalDelete.css'
import { Button,Modal,Input } from 'react-bootstrap';

export const ModalDelete = ({closeModal}) => {

  const onRemove = () =>{
    alert("Cập nhật thành công", '#28a745');
  }

  return (
    <Modal
            show={closeModal}
            onHide={closeModal}
            backdrop="static"
            keyboard={() => closeModal(false)}
        >
        <Modal.Header closeButton>
          <Modal.Title>Xóa Sinh Viên</Modal.Title>
        </Modal.Header>
            <Modal.Body>
            <b style={{ color: "#2c3e50" }}>Bạn có muốn xóa sinh viên này</b>
            </Modal.Body>
            <Modal.Footer>
                       <Button onClick={onRemove} >Xóa</Button>{' '}
                       <Button  onClick={() => closeModal(false)}>Hủy</Button>
             </Modal.Footer>

            
      </Modal>
    
  )
}

export default ModalDelete;
{/* <button type="submit" class="btn btn-success mt-4">Add Record</button>
                  <button type="submit" class="btn btn-success mt-4"onClick={() => closeModal(false)}>Đóng</button> */}