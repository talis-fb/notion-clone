import { configureStore } from '@reduxjs/toolkit'
import PagesSlice from './features/pagesSlice'

export default configureStore({
    reducer: {
        pages: PagesSlice
    }
})
