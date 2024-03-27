import CardList from "../components/CardList"
import ViewUserButton from "../components/ViewUserButton"
import styles from "./postPage.module.css"

const base_url = "https://jsonplaceholder.typicode.com/posts"

interface Iposts {
    userId: number,
    id: number,
    title: string,
    body: string,
}

const Posts = async () => {

    const response = await fetch(base_url, {
        cache: "no-store"
    })
    const posts: Iposts[] = await response.json()

    return (
        <>
            <div className={styles.bgRed}>Post</div>
            <div className="bg-orange-500">Hello Post</div>
            {posts.map((item) => {
                return <CardList key={item.id}>
                    <ViewUserButton userId={item.id}/>
                    <h2 className="bold">{item.title}</h2>
                    <p>{item.body}</p>
                    <br/>
                </CardList>
            })}
        </>
    )
}

export default Posts
