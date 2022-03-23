

import { configureStore } from '@reduxjs/toolkit'
import CompoSlice from '../reducer/CompoSlice'

export const store = configureStore({
    reducer: {
        counter: CompoSlice
    },
  })
  

