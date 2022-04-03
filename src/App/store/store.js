import { configureStore } from '@reduxjs/toolkit'
import PagesSlice from './features/pagesSlice'
import UserProfileSlice from './features/userProfileSlice'

export default configureStore({
    reducer: {
        pages: PagesSlice,
        profile: UserProfileSlice
    }
})
