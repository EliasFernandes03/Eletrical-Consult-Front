import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { ListComapaniesPage } from "./Pages/ListComapaniesPage";


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/listCompanies" element={<ListComapaniesPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
