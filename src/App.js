import "./styles/skan.css";
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Home from "./pages/home/home";
import Search from "./pages/search/search";
import Authorization from "./pages/autorization/authorization";
import Result from "./pages/result/result";
import {useContext, useEffect} from "react";
import {AccountService} from "./services/account.service";
import {Context} from "./store";

function App() {
  const store = useContext(Context)

  useEffect(() => {
    async function getInfo() {
      const expired = localStorage.getItem('expire')
      console.log(expired)
      if (expired && Date.parse(expired) > Date.now()) {
        const { data } = await AccountService.getInfo()
        store.setUser(data)
        store.setIsAuthorized(true)
        console.log('user: ', data)
      }
    }
    try {
      getInfo()
    } catch (e) {
      console.log(e)
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={'/'}>
          <Route path={'/'} element={<Home />} />
          <Route path={'/home'} element={<Home />} />
        </Route>
        <Route path={'/search'} element={<Search />} />
        <Route path={'result'} element={<Result />} />
        <Route path={'auth'} element={<Authorization />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
