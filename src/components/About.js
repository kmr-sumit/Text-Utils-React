import React, { useState } from "react";

function About() {
    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white",
        border: "1px solid black"
    })

    //Changing the  text of Enable Dark Mode Button
    const [btnText, setBtnText] = useState("Enable Dark Mode");


    function toggleStyle(){
        if(myStyle.color === "white"){
            setBtnText("Enable Dark Mode")
            setMyStyle({
                color:"black",
                backgroundColor:"white",
                border:"1px solid white"
            })
            
        }
        else {
            setBtnText("Enable Light Mode")
            setMyStyle({
                color:"white",
                backgroundColor:"black"
            })
        }
    }

    return (
        <div className="container" style={myStyle}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button
                                className="btn btn-link btn-block text-left"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                                style={myStyle}
                            >
                                Collapsible Group Item #1
                            </button>
                        </h2>
                    </div>

                    <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                    >
                        <div className="card-body" style={myStyle}>
                            Some placeholder content for the first accordion panel. This panel
                            is shown by default, thanks to the <code>.show</code> className.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                            <button
                                className="btn btn-link btn-block text-left collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                                style={myStyle}
                            >
                                Collapsible Group Item #2
                            </button>
                        </h2>
                    </div>
                    <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                    >
                        <div className="card-body" style={myStyle}>
                            Some placeholder content for the second accordion panel. This
                            panel is hidden by default.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                            <button
                                className="btn btn-link btn-block text-left collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                                style={myStyle}
                            >
                                Collapsible Group Item #3
                            </button>
                        </h2>
                    </div>
                    <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordionExample"
                    >
                        <div className="card-body" style={myStyle}>
                            And lastly, the placeholder content for the third and final
                            accordion panel. This panel is hidden by default.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
            </div>
        </div>
    );
}

export default About;
