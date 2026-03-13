import React from 'react'
import "./TimeLine.css"
import { FaCheckCircle, FaChevronCircleRight, FaRegCircle } from "react-icons/fa";


const TimeLine = ({ step }) => {
    const steps = ["Address", "Contact", "Professional", "Address", "References", "Social"]
    return (
        <div className="timeline-container">
            {steps.map((item, index) => (
                <div key={index} className="timeline-step">
                    <span style={{
                        color: index + 1 <= step ? "green" : "lightblue",
                        fontSize: "20px"
                    }}>
                        {index + 1 < step ? <FaCheckCircle /> : index + 1 === step ? <FaChevronCircleRight /> : <FaRegCircle />}
                    </span >
                    <span className="timeline-text">{item}</span>
                    {index !== steps.length - 1 && (
                        <span className="timeline-line">────</span>
                    )}

                </div>
            ))}
        </div>
    )
}

export default TimeLine