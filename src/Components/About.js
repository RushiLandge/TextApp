import React from 'react'

export default function About(props) {

let myStyle = {
  color: props.mode === 'dark'?'white': '#042743',
  backgroundColor: props.mode ==='dark'?'rgb(36 74 104)': 'white',
}
  return (
 <div className='container'>
  <h1 className='my-3' style={{color: props.mode === 'dark'?'white': '#042743'}}>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyse your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show"  style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        TextUtils gives you a way to analyse your given text quickly & efficiently. Be it word count, character count or character change case, TextUtils will handle it with ease.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         <strong>Free to Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        TextUtils is a free to use character counter tool that provides instant character count & word count statistics for the given text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This word counter tool works in ay web browser such as chrome, firefox, etc.
      </div>
    </div>
  </div>
  </div>
</div>
  )
}
