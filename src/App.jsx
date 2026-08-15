import { useState } from 'react'
import MainContent from './components/MainContent.jsx'
import './App.css'

function App() {


    return (
        <div className='container'>

            <header>
                <div className="icon">
                    <i class="ph-bold ph-code"></i>
                </div>
                <div className='header-content'>
                    <h1>Frontend Development Roadmap</h1>
                    <p>Step-by-step guide to become a skilled frontend developer</p>
                </div>
            </header>

            <MainContent />

        </div>
    )
}

export default App
