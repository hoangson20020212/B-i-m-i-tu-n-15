import React,{useState} from 'react'
import { Button,Modal,Input } from 'react-bootstrap';
import './ModalAdd.css'


export const ModalAdd = ({closeModal}) => {

  ///val
  <Modal>
    
  </Modal>

  return (
    <Modal
            show={closeModal}
            onHide={closeModal}
            backdrop="static"
            keyboard={() => closeModal(false)}
        >
        <Modal.Header closeButton>
          <Modal.Title>Thêm sinh viên</Modal.Title>
        </Modal.Header>
            <Modal.Body>
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
                  <button type="submit" class="btn btn-success mt-4">Add Record</button>
                  <button type="submit" class="btn btn-success mt-4" onClick={() => closeModal(false)}>Đóng</button>
                </form>
            </Modal.Body>
      </Modal>
  )
}

export default ModalAdd
