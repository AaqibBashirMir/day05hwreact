import React, { useState } from 'react'
import { quote } from "./Data";
import "./Generator.css"

function Generator() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);
    function handler(e) {
        e.preventDefault()
        let total = parseInt(count);
        if (total < 1) {
            total = 1;
        }
        if (total > 10) {
            alert("over the limit");

        }
        setText(quote.slice(0, total))
    }
    return (
        <div className='main'>
            <section>
                <h1>TIRED OF BORING LOREM IPSUM?</h1>
                <form onSubmit={handler} id="form">
                    <label id="para">Paragraphs:</label>
                    <input
                        type="number"
                        id="value"
                        name="paragraphs"
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                    />
                    <button>Generate</button>

                </form>

            </section>
            <article style={
                {color:"blue",fontSize:"large",padding:"40px",margin:"50px 20px",fontWeight:"bold"}
            }>
                {text.map((lines, idx) => <p key={idx} style={{margin:'40px',textShadow:"0 0 5px pink"}}>{lines}</p>)}
            </article>


        </div>
    )
}

export default Generator
