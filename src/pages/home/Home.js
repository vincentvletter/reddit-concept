import './Home.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import HeaderContent from "../../components/headerContent/HeaderContent";
import Tile from "../../components/tile/Tile";
import Skeleton from "../../components/skeleton/Skeleton";

function Home() {

    const [getResult, setGetResult] = useState();

    useEffect(() => {
        const source = axios.CancelToken.source();

        async function fetchData() {
            try {
                const result = await axios.get(`https://www.reddit.com/hot.json?limit=15`, {cancelToken: source.token});
                setGetResult(result.data.data.children);
                console.log(result.data);
                console.log(result.data.data.children);

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
                <img
                    src="https://raw.githubusercontent.com/vincentvletter/concept-reddit/main/src/assets/logo.png"
                    alt="reddit-logo"/>
                <h2>Reddit</h2>
            </HeaderContent>
            <main className="outerbox">
                <div className="innerbox">
                    <section>
                        <article className="tile-content">
                            <h2>Hottest posts</h2>
                            <p>on Reddit right now</p>
                        </article>
                        <article className="tile-container">
                            {getResult ? getResult.map((result) => {
                                return <Tile
                                    title={result.data.title}
                                    subreddit={result.data.subreddit_name_prefixed}
                                    comments={result.data.num_comments}
                                    ups={result.data.ups}
                                    href={result.data.url}
                                    subredditId={result.data.subreddit}
                                    key={result.data.title}
                                />
                            }) : <Skeleton/>}
                        </article>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Home;