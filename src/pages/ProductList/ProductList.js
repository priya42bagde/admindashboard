import "./ProductList.css"
import React, { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../DummyData"
import { Link } from "react-router-dom";

function ProductList() {
    const [data, setData] = useState(productRows)
    const handleDelete =(id)=>{
        setData(data.filter(item => item.id !==id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
            field: 'product', headerName: "Product", width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 200, editable: true, },
        { field: 'status', headerName: 'Status', width: 140, editable: true, },
        { field: 'price', headerName: 'Price', width: 180, },
        {
            field: 'action', headerName: 'Action', width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}><button className="productListEdit">Edit</button></Link>
                        <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
        },
    ];

    return (
        <div className="productList">
            <DataGrid className="productListGrid" rows={data} columns={columns} pageSize={8} checkboxSelection disableSelectionOnClick />
        </div>
    )
}

export default ProductList
