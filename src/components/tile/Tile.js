import React from "react";
import './Tile.css';
import {Link} from "react-router-dom";
import titleToLong from "../../helpers/titleToLong";
import dotNotation from "../../helpers/dotNotation";
import Skeleton from "../skeleton/Skeleton";

function Tile({title, subreddit, comments, ups, href, subredditId}) {

    const newTitle = titleToLong(title);

    return (
        <div className="tile">

            <section>
                <h2 className="tile-h2"><a href={href}>{newTitle}</a></h2>
                <div className="tile-subs">
                    <h3><Link to={`/subreddit/r/${subredditId}`}>{subreddit}</Link></h3>
                    <p>Comments {dotNotation(comments)} - Ups {dotNotation(ups)}</p>
                </div>
            </section>
        </div>
    )
}

export default Tile;