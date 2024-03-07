import { createSlice } from '@reduxjs/toolkit'
import postsDb from '../../data/postsDb.json'
import { nanoid } from '@reduxjs/toolkit'

const postsSlice = createSlice({
    name: 'posts',
    initialState: postsDb,
    reducers: {
        postAdded(state, action) {
            const newPost = {
                id: nanoid(), 
                title: action.payload.title,
                content: action.payload.content,
                author: action.payload.author,
            }
            state.push(newPost);
        }
       
    }
})

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer; 