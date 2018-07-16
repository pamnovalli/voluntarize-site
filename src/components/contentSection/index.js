import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const ContentSection = (props) => (
    <div id={props.id} className="ContentSectionBackground">
        <div className="ContentSectionHeader">
            <h1>{props.title}</h1>
        </div>
        <div className="ContentSectionContent">
            {props.content.split("\\n").map((item, i) => {
                console.log("linha")
                return (<p key={i}>{item }</p>)
            })}
        </div>
        {props.children && props.children}
    </div>
)

export default ContentSection