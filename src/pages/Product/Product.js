import React from 'react'
import { Link } from 'react-router-dom'
import "./Product.css"
import Chart from "../../components/chart/Chart"
import {productData} from "../../DummyData"
import { Publish } from '@material-ui/icons'

function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                 <Link to="/newproduct">
                 <button className="productAddButton">Create</button>
                 </Link>
            </div>
            <div className="productTop">

               <div className="productLeft">
                   <Chart data={productData} dataKey="Sales" title="Sales Peformance"/>
               </div>

               <div className="productRight">
                   <div className="productInfoTop">
                        <img className="productInfoImg" src="/images/userC.JPG" alt=""/>
                        <span className="productName">Apple Airpods</span>
                   </div>
                   <div className="productInfoBottom">
                     <div className="productInfoItem">
                       <span className="productInfoKey">id:</span>
                       <span className="productInfoValue">123</span>
                     </div>

                     <div className="productInfoItem">
                       <span className="productInfoKey">sales:</span>
                       <span className="productInfoValue">$123</span>
                     </div>

                     <div className="productInfoItem">
                       <span className="productInfoKey">active:</span>
                       <span className="productInfoValue">yes</span>
                     </div>

                     <div className="productInfoItem">
                       <span className="productInfoKey">in stock:</span>
                       <span className="productInfoValue">no</span>
                     </div>
                   </div>
               </div>
            </div>
            <div className="productBottom">
               <form className="productForm">
                    <div className="productFormLeft">
                       <label>Product Name</label>
                       <input type="text" placeholder="Apple Airpods"/>
                       <label>In Stock</label>
                       <select id="inStock" name="inStock">
                           <option value="yes">Yes</option>
                           <option value="no">No</option>
                       </select>

                       <label>Active</label>
                       <select id="active" name="active">
                           <option value="yes">Yes</option>
                           <option value="no">No</option>
                       </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                           <img className="productUploadImage" src="/images/userD.JPG" alt=""/>
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="text" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="productButton">
                            Update
                        </button>
                    </div>
               </form>
            </div>
        </div>
    )
}

export default Product
