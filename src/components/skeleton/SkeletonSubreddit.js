import React from "react"
import ContentLoader from "react-content-loader"
import './SkeletonSubreddit.css'


function SkeletonSubreddit() {

    return (

        <ContentLoader className='skeleton2' viewBox="0,0,200,100">
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="5" ry="5" width="15" height="75"/>
        </ContentLoader>
    )
}

export default SkeletonSubreddit;