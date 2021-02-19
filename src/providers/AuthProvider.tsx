import React, {
  createContext,
  Dispatch,
  FC,
  useContext,
  useEffect,
  useReducer,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthActionType, SetAuthAction } from "../reducers/reducerTypes";
import authReducer from "../reducers/AuthReducer";
import { getPersonalData } from "../utils/storage";

const AuthContext = createContext<{
  isSignedIn: boolean;
  dispatch: Dispatch<SetAuthAction>;
}>({
  isSignedIn: false,
  dispatch: () => null,
});

const AuthProvider: FC = ({ children }) => {
  const [isSignedIn, dispatch]: [boolean, Dispatch<SetAuthAction>] = useReducer(
    authReducer,
    false
  );

  const bootstrapAsync = async () => {
    let details;

    try {
      details = await getPersonalData();
      if (details)
        dispatch({
          type: AuthActionType.SetAuth,
          payload: { isSignedIn: true },
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    bootstrapAsync();
  }, []);

  return (
    <AuthContext.Provider value={{ isSignedIn, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
