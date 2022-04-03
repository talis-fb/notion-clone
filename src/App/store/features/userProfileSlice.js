import { createSlice } from '@reduxjs/toolkit'

const userProfileSlice = createSlice({
    name: 'profile',
    initialState:  {
        name: 'Talison',
        icon: 'https://avatars.githubusercontent.com/u/54823205?v=4'
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload
        }
    }
})

const selectName = state => state.profile.name;
const selectUser = state => state.profile;

export { selectName, selectUser }
export default userProfileSlice.reducer;
