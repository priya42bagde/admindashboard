import React from 'react'
import "./WidgetLarge.css"

function WidgetLarge() {

    const Button =({type})=>{
        return <button className={"WidgetLargeButton "+type}>{type}</button>
    }

    return (
        <div className="WidgetLarge">
            <h3 className="WidgetLargeTitle">Latest Transactions</h3>
            <table className="WidgetLargeTable">
               <tr className="WidgetLargeTr">
                   <th className="WidgetLargeTh">Customer</th>
                   <th className="WidgetLargeTh">Date</th>
                   <th className="WidgetLargeTh">Amount</th>
                   <th className="WidgetLargeTh">Status</th>
               </tr>
               <tr className="WidgetLargeTr"> 
                   <td className="WidgetLargeUser">
                       <img src="./images/UserA.JPG" alt="" className="WidgetLargeImg"/>
                       <span className="WidgetLargeName">Susan Carol</span>
                   </td>
                   <td className="WidgetLargeDate"> 4 Feb 1995</td>
                   <td className="WidgetLargeAmount"> $122.00</td>
                   <td className="WidgetLargeStatus"> <Button type="Approved"/></td>
               </tr>

               <tr className="WidgetLargeTr"> 
                   <td className="WidgetLargeUser">
                       <img src="./images/UserA.JPG" alt="" className="WidgetLargeImg"/>
                       <span className="WidgetLargeName">Susan Carol</span>
                   </td>
                   <td className="WidgetLargeDate"> 4 Feb 1995</td>
                   <td className="WidgetLargeAmount"> $122.00</td>
                   <td className="WidgetLargeStatus"> <Button type="Declined"/></td>
               </tr>

               <tr className="WidgetLargeTr"> 
                   <td className="WidgetLargeUser">
                       <img src="./images/UserA.JPG" alt="" className="WidgetLargeImg"/>
                       <span className="WidgetLargeName">Susan Carol</span>
                   </td>
                   <td className="WidgetLargeDate"> 4 Feb 1995</td>
                   <td className="WidgetLargeAmount"> $122.00</td>
                   <td className="WidgetLargeStatus"> <Button type="Pending"/></td>
               </tr>
 
               <tr className="WidgetLargeTr"> 
                   <td className="WidgetLargeUser">
                       <img src="./images/UserA.JPG" alt="" className="WidgetLargeImg"/>
                       <span className="WidgetLargeName">Susan Carol</span>
                   </td>
                   <td className="WidgetLargeDate"> 4 Feb 1995</td>
                   <td className="WidgetLargeAmount"> $122.00</td>
                   <td className="WidgetLargeStatus"> <Button type="Approved"/></td>
               </tr>
               

            </table>
        </div>
    )
}

export default WidgetLarge
