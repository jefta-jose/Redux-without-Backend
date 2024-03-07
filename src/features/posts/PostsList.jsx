import '../../App.css'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    return (
        <div>
            <h2>Posts</h2>
            <section className='container' >
                {posts.map(post => (
                    <article key={post.id} className='card'>
                        <h3>{post.title}</h3>
                        <p>{post.content.substring(0, 250)}</p>
                        <p className='author'>Author: {post.author}</p>
                    </article>
                ))}
            </section>
        </div>
    )
}

export default PostsList