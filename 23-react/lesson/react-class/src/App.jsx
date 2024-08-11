import "./App.css";
import { Header } from "./layout/Header";
import { CssBaseline } from "@mui/material";
import { ProductListPage } from "./productList/ProductListPage";
import { PageTitleProvider } from "./context/PageTitle";
import { UserProvider } from "./context/User";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { ProductPage } from "./product/ProductPage";

function App() {
  return (
    <PageTitleProvider>
      <UserProvider>
        <CssBaseline />
        <Router>
          <Header />
          <Routes>
            <Route path='/product-list' element={<ProductListPage />} />
            <Route path='product/:productId' element={<ProductPage />} />
            <Route path='*' element={<Navigate to='/product-list' replace />} />
          </Routes>
        </Router>
      </UserProvider>
    </PageTitleProvider>
  );
}

export default App;
