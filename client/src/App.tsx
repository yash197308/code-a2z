import { useEffect } from "react";
import { Routes } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "./shared/states/user";
import Notifications from "./shared/components/molecules/notifications";

function App() {
  const [userAuth, setUserAuth] = useAtom(userAtom);

  useEffect(() => {
    // Check if user is authenticated
    if (userAuth) {
      // User is authenticated, you can fetch user data or perform other actions
    } else {
      // User is not authenticated, redirect to login or show appropriate UI
      setUserAuth({
        access_token: null,
      });
    }
  }, [userAuth, setUserAuth]);

  return (
    <>
      <Routes>
      </Routes>

      <Notifications />
    </>
  )
}

export default App;
