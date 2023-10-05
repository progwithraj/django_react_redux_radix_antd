import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage.jsx'
import DocsPage from './pages/docsPage/DocsPage'
import React from 'react'

function Router() {
    return (
        <div className="router-div">
            <Routes>
                <Route path="" element={<HomePage />} />
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/about" element={<AboutUsPage />} />
            </Routes>
        </div>
    )
}

export default Router