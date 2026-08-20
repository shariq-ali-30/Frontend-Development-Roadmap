import React, { useState } from 'react'
import steps from '../steps.js'

const MainContent = () => {
    let [stepCount, setStepCount] = useState(1)

    return (
        <>
            <div className="steps-section">
                {steps.map((step) => (
                    <React.Fragment key={step.stepNumber} >
                        <div className={`step ${stepCount >= step.stepNumber ? "active" : ""}`}>
                            {step.stepNumber}
                            <span>{step.name}</span>
                        </div>
                        <div className={`progress-line ${stepCount > step.stepNumber ? "active" : ""}`}><span></span></div>
                    </React.Fragment>
                ))}
            </div>

            <div className="main-section">

                <div className="content">

                    <div className="left">
                        <div>
                            <img src={steps[stepCount - 1].image} />
                            <h2>{steps[stepCount - 1].name}</h2>
                        </div>
                    </div>
                    <div className="divider-y"></div>
                    <div className="right">
                        <h2><span></span> {steps[stepCount - 1].name}</h2>
                        <p>{steps[stepCount - 1].description}</p>
                        <div className="features">

                            {steps[stepCount - 1].features.map((feature, idx) => (
                                <div className="item" key={idx}>
                                    <div className="icon">
                                        <i className={feature.icon}></i>
                                    </div>
                                    <div>
                                        <p>{feature.title}</p>
                                        <span>{feature.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="divider-x"></div>

                <div className="btns">
                    <button className={stepCount == 1 ? "disabled" : ""} onClick={() => setStepCount(stepCount - 1)}><i className="ph-bold ph-arrow-left"></i> Previous</button>
                    <p>{`${stepCount} / ${steps.length}`}</p>
                    <button className={stepCount == steps.length ? "disabled" : ""} onClick={() => setStepCount(stepCount + 1)}>Next <i className="ph-bold ph-arrow-right"></i></button>
                </div>
            </div>

            <div className="proTip">
                <div>
                    <div className="icon">
                        <i className="ph-fill ph-lightbulb"></i>
                    </div>
                    <p><span>Pro Tip: </span> {steps[stepCount - 1].proTip}</p>
                </div>
                <i className="ph ph-sparkle"></i>
            </div>
        </>
    )
}

export default MainContent