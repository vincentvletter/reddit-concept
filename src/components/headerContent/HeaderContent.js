import React from "react";

import './HeaderContent.css'

function HeaderContent({children}) {

    return(
        <header className="outerbox">
            <div className="innerbox">
                <nav>
                    <ul>
                        <li>hottest posts</li>
                        <li>reddit</li>
                        <li>memes</li>
                    </ul>
                </nav>
                <div className="content">
                    {children}
                </div>
            </div>
        </header>
    )
}

export default HeaderContent;



