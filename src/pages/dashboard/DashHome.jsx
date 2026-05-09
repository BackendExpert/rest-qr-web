import React from 'react'
import CardData from './MainDash/CardData'
import TopItems from './MainDash/TopItems'

const DashHome = () => {
    return (
        <div>
            <div className="xl:flex">
                <div className="xl:w-3/4">
                    <CardData />
                </div>
                
                <div className="xl:w-1/4 xl:ml-4">
                    <TopItems />
                </div>
            </div>
        </div>
    )
}

export default DashHome