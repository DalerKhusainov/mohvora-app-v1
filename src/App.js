// REACT COMPONENTS
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { HowWork } from "./pages/HowWork";
import { HowDriver } from "./pages/HowDriver";
import { HowPassenger } from "./pages/HowPassenger";
import { SearchPage } from "./pages/SearchPage";
import { SelectedDriver } from "./pages/SelectedDriver";
import { PublishPage } from "./pages/PublishPage";
import { SuccessPublishPage } from "./pages/SuccessPublishPage";
import { UserProfile } from "./pages/UserProfile";
import { Chat } from "./pages/Chat";
import { ErrorPage } from "./pages/ErrorPage";

// REACT RAUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS STYLES
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="search-page" element={<SearchPage />} />
            <Route path="how-work" element={<HowWork />} />
            <Route path="how-work/how-driver" element={<HowDriver />} />
            <Route path="how-work/how-passenger" element={<HowPassenger />} />
            <Route path="selected-driver" element={<SelectedDriver />} />
            <Route path="publish-page" element={<PublishPage />} />
            <Route
              path="publish-page/success-publish-page"
              element={<SuccessPublishPage />}
            />
            <Route path="user-profile/*" element={<UserProfile />} />
            <Route path="chat" element={<Chat />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
