import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage.jsx'
import DocsPage from './pages/docsPage/DocsPage'
import React from 'react'
import './App.less'


function Router() {
    return (
        <div className="text-xl text-pink-700">
            <Routes>
                <Route path="" element={<HomePage />} />
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/about" element={<AboutUsPage />} />
            </Routes>
        </div>
    )
}

export default Router