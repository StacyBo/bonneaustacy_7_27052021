import { useEffect, useState } from "react";
import { getLastPosts } from "../utils/apiCalls";
import LastPost from "./LastPost";

const LastPosts = () => {
    const [lastPosts, setLastPosts] = useState([])

    useEffect(() => {
        getLastPosts()
            .then((lastPostsResult) => {
                setLastPosts(lastPostsResult)
            })
    },
        [])

    return (
        <>
            <section>
                <div className="container card h-100 w-75 mb-4 pt-2">
                    <h3 className="card-header mb-4">Vos 3 derniers postes :</h3>
                    {lastPosts.map((lastpost) => {
                        return < LastPost lastPost={lastpost}
                        />
                    })}
                </div>
            </section>
        </>
    )
}

export default LastPosts;