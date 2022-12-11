import userReducer from './userSlice'
import { configureStore } from "@reduxjs/toolkit"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import postReducer from './postsSlice'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const persistedUserReducer = persistReducer(persistConfig, userReducer)

const store = configureStore({
    reducer: {
        posts: postReducer,
        user: persistedUserReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})


export let persistor = persistStore(store)
export default store