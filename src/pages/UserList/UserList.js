import "./UserList.css"
import React, { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../DummyData"
import { Link } from "react-router-dom";


function UserList() {

    const [data, setData] = useState(userRows)

    const handleDelete =(id)=>{
        setData(data.filter(item => item.id !==id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
            field: 'user', headerName: "User", width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt="" />
                        {params.row.userName}
                    </div>
                )
            }
        },
        // { field: 'userName', headerName: 'User Name', width: 200, editable: true, },
        { field: 'email', headerName: 'Email', width: 200, editable: true, },
        { field: 'status', headerName: 'Status', width: 140, editable: true, },
        { field: 'transaction', headerName: 'Transaction', width: 180, },
        {
            field: 'action', headerName: 'Action', width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}><button className="userListEdit">Edit</button></Link>
                        <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
        },
    ];



    return (
        <div className="userList">
            <DataGrid rows={data} columns={columns} pageSize={8} checkboxSelection disableSelectionOnClick />
        </div>
    )
}

export default UserList
