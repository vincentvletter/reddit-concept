import './Subreddit.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import HeaderContent from "../../components/headerContent/HeaderContent";
import dotNotation from "../../helpers/dotNotation";
import SkeletonSubreddit from "../../components/skeleton/SkeletonSubreddit";


function Subreddit() {
    const {subredditId} = useParams();
    const [getResult, setGetResult] = useState();


    useEffect(() => {
        const source = axios.CancelToken.source();

        async function fetchData() {
            try {
                const result = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`, {cancelToken: source.token});
                setGetResult(result.data);
                console.log(result.data);


            } catch (error) {
                if (axios.isCancel(error)) {
                } else {
                    throw error;
                }
            }
        }

        fetchData();

        return function cleanup() {
            source.cancel();
        }

    }, [])


    return (
        <>

            <HeaderContent>
                {getResult &&
                <h2>{getResult.data.display_name_prefixed}</h2>
                }
                <p>Subreddit specifications</p>
            </HeaderContent>

            <main className="outerbox">
                <div className="innerbox">
                    {getResult ?
                        <div className="subreddit-container">
                            <h2>Title</h2>
                            <p>{getResult.data.display_name}</p>
                            <h2>Description</h2>
                            <p>{getResult.data.public_description}</p>
                            <h2>Number of subscribers</h2>
                            <p>{dotNotation(getResult.data.subscribers)}</p>
                        </div> : <SkeletonSubreddit/>
                    }

                    <Link className="a" to="/">Take me back</Link>
                </div>
            </main>
        </>
    );
}

export default Subreddit;