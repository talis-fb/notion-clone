import { createSlice } from '@reduxjs/toolkit'

const pagesSlice = createSlice({
    name: 'pages',
    initialState: { 
        root: [
            {name:'primeira', body:[]}
        ]
    },
    reducers: {
        addPage: state => {
            state.root.push({name:''})
        },
        renamePage: (state, payload) => {
            const { id, name } = payload.payload;
            state.root[id].name = name;
        },
    }
})

const selectPage = function(id) {
    return state => state.pages.root[id]
}

const selectAllPages = state => state.pages.root;
// const getNameUser = state => state.profile.name
// const getIconUser = state => state.profile.icon

export { selectPage, selectAllPages }
export const { addPage, renamePage } = pagesSlice.actions;
export default pagesSlice.reducer;
