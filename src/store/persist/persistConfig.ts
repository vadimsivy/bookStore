import storage from "redux-persist/lib/storage"
import blacklist from "./blackList"

const persistConfig = {
  key: 'root',
  storage,
  blacklist,
}

export default persistConfig
