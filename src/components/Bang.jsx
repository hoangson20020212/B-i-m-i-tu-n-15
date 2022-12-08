import React from 'react'
import DataTable from 'react-data-table-component'
import data from '../data.json'
import { useEffect, useState } from 'react';
import ModalAdd from '../Modal/ModalAdd/ModalAdd';
import { ModalDelete } from "../Modal/ModalDelete/ModalDelete";
import  ModalUpdate  from "../Modal/ModalUpdate/ModalUpdate";
import { FcSearch } from "react-icons/fc";
import { Button } from 'react-bootstrap';

const Bang = () => {
    
    const [listStudent, setListStudent] = useState([]);
    const [search, setSearch] = useState('');

    const [modalAdd, setModalAdd] = useState(false);
    const [modalUpdate, setModalUpdate] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [fillteredStudent, setFilteredStudent] = useState([])

    
    

    const columns = [
      {
        name: "ID",
        selector: (row) => row.id,
        sortable: true
      },
      {
        name: "Mã sinh viên",
        selector: (row) => row.studentCode,
        sortable: true
      },
      {
        name: "Tên",
        selector: (row) => row.name,

      },
      {
        name: "Ngày sinh",
        selector: (row) => row.dateOfBirth,
      },
      {
        name: "Quê",
        selector: (row) => row.home,
      },
      {
        name: "Chức năng",
        selector: (row) => 
        <>
        <button className='btn btn-primary' onClick={() => setModalUpdate(true)}>Sửa</button>
        <button className='btn btn-primary' onClick={() => setModalDelete(true)}>Xóa</button>
        </>,
      },
  
    ];
  
  
    

    useEffect(()=>{
      setFilteredStudent(data);
      setListStudent(data);
    },[]);
  
    useEffect(()=>{
        const result = listStudent.filter((list)=>{
            return list.name.toLowerCase().match(search.toLocaleLowerCase());
        });
        setFilteredStudent(result);
    },[search])

  return (
    <>
    <DataTable 
    columns={columns} 
    data={fillteredStudent}
    pagination
    actions={<button className='btn btn-info' onClick={() => setModalAdd(true)}>Thêm Sinh Viên</button>}
    subHeader
    subHeaderComponent={
      <>
      <FcSearch/>
      <label><b>Search: </b></label>
      <input type="text" placeholder="Tìm kiếm tên" 
      className="w-25 form-control"
      value={search}
      onChange={(e)=> setSearch(e.target.value)}
    />
      </>
    }
    />
        {modalAdd && <ModalAdd closeModal={setModalAdd}/>}
        {modalDelete && <ModalDelete closeModal={setModalDelete}/>}
        {modalUpdate && <ModalUpdate closeModal={setModalUpdate}/>}

    </>
  )
}

export default Bang