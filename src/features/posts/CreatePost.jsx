import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from './postsSlice'
import { selectAllUsers} from '../users/usersSlice'

const CreatePost = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)
   

    const randomUserName = (users) => {
        const user = users[Math.floor(Math.random() * users.length)]
        return user.name
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (e.target[0].value === "" || e.target[1].value === "") {
            alert("Please fill in both fields")
        }
        const newPost = { title: e.target[0].value, content: e.target[1].value, author : randomUserName(users)  }
        console.log(newPost)
        dispatch(postAdded(newPost))
        // Clear the input fields
        e.target[0].value = ""
        e.target[1].value = ""
    }
    return (
        <div>
            <section>
                <h2>Add a New Post</h2>
                <form onSubmit={handleSubmit} className="form">
                    <label className="form-input" htmlFor="postTitle">Title:
                        <input type="text" id="postTitle" name="postTitle" />
                    </label>
                    <label className="form-input" htmlFor="postContent">Content:
                        <textarea id="postContent" name="postContent" />
                    </label>
                    <button type="submit">Save Post</button>
                </form>
            </section>
        </div>
    )
}

export default CreatePost