import React from 'react'
import CardData from './MainDash/CardData'
import TopItems from './MainDash/TopItems'
import ChartData from './MainDash/ChartData'
import OrderTable from './MainDash/OrderTable'
import CustomerReviews from './MainDash/CustomerReviews'

const DashHome = () => {
    return (
        <div>
            <div className="xl:flex">
                <div className="xl:w-3/4">
                    <div className="">
                        <CardData />
                    </div>
                    <div className="mt-4">
                        <ChartData />
                    </div>
                    <div className="mt-4">
                        <OrderTable />
                    </div>
                    <div className="mt-4">
                        <CustomerReviews />
                    </div>
                </div>
                
                <div className="xl:w-1/4 xl:ml-4">
                    <TopItems />
                </div>
            </div>
        </div>
    )
}

export default DashHome