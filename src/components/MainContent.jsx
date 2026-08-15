import React from 'react'
import htmlImage from '../assets/html.png'

const MainContent = () => {
    return (
        <>
            <div className="steps-section">
                <div className="step active">
                    1
                    <span>HTML</span>
                </div>
                <div className="progress-line"><span></span></div>
                <div className="step">
                    2
                    <span>CSS</span>
                </div>
                <div className="progress-line"><span></span></div>
                <div className="step">
                    3
                    <span>JavaScript</span>
                </div>
                <div className="progress-line"><span></span></div>
                <div className="step">
                    4
                    <span>React</span>
                </div>
                <div className="progress-line"><span></span></div>
                <div className="step">
                    5
                    <span>Tools & Deployment</span>
                </div>
            </div>

            <div className="main-section">

                <div className="content">

                    <div className="left">
                        <img src={htmlImage} width={150} />
                    </div>
                    <div className="divider-y"></div>
                    <div className="right">
                        <h2><span></span> HTML</h2>
                        <p>HTML (HyperText Markup Language) is the foundation of every web page. It provides the basic structure and content of a website.
                        </p>
                        <div className="list">

                            <div className="item">
                                <div className="icon">
                                    <i class="ph ph-browser"></i>
                                </div>
                                <p>Structure the Web</p>
                                <span>Learn how HTML elements create the structure of web page.</span>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <i class="ph ph-browser"></i>
                                </div>
                                <p>Structure the Web</p>
                                <span>Learn how HTML elements create the structure of web page.</span>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <i class="ph ph-browser"></i>
                                </div>
                                <p>Structure the Web</p>
                                <span>Learn how HTML elements create the structure of web page.</span>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="btns">
                    <button><i className="ph ph-arrow-left"></i> Previous</button>
                    <button>Next <i className="ph ph-arrow-right"></i></button>
                </div>

            </div>
        </>
    )
}

export default MainContent