import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from "../../components/chart/Chart"
import "./Home.css"
import {userData} from "../../DummyData"
import WidgetSmall from '../../components/WidgetSmall/WidgetSmall'
import WidgetLarge from '../../components/WidgetLarge/WidgetLarge'



function Home() {
    return (
        <div className="home">
             
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="ActiveUser"/>
            <div className="homeWidgets">
                <WidgetSmall/>
                <WidgetLarge/>
            </div>
        </div>
    )
}

export default Home
