import React from 'react'
import './ModalUpdate.css'
import { Button,Modal,Input } from 'react-bootstrap';

const ModalUpdate = ({closeModal}) => {

    const onUpdate = () =>{
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
            <Modal.Title>Sửa thông tin sinh viên</Modal.Title>
          </Modal.Header>
              <Modal.Body>

              <b style={{ color: "#2c3e50" }}>Bạn có muốn xóa sinh viên này</b>
              <form>
                <div class="form-group">
                    <input  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mã sinh viên"/>
                </div>
                <div class="form-group mt-3">
                    <input  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Họ tên"/>
                </div>
                <div class="form-group mt-3">
                    <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ngày sinh"/>
                </div>
                <div class="form-group mt-3">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Quê quán"/>
                </div>
              </form>
              </Modal.Body>
              <Modal.Footer>
                         <Button onClick={onUpdate} >Update</Button>{' '}
                         <Button  onClick={() => closeModal(false)}>Hủy</Button>
               </Modal.Footer>
  
              
        </Modal>
      
    )
    
}

export default ModalUpdate