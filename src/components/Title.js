import React from 'react'

export default function Title({name, title, style}) {
    return (
        <div className="row">
            <div className={style ? "col-10  text-center title-style " : "col-10 mx-auto my-2 text-center text-title"} style={{fontSize: '2rem'}}>
                <h1 className={style ? "text-capitalize" : "text-capitalize font-weight-bold"}> 
                {name} <strong className={style ? null: "text-blue"}>{title}</strong>
                </h1>
            </div>
        </div>
    )
}
