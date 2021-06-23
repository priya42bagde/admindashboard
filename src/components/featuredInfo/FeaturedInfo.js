import React from 'react'
import "./FeaturedInfo.css"
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';


function FeaturedInfo() {
    return (
        <div className="featured">
          
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,145</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredIcon_negative"/></span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,415</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredIcon_negative"/></span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,145</span>
                    <span className="featuredMoneyRate"> +2.4 <ArrowUpward className="featuredIcon_positive"/></span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
