import React from 'react'

export default function About(props) {
  return (
    <div className="card" style={props.mode==='light'?{backgroundColor:'white',color:'black',padding:'30px',lineBreak:'10px', marginTop:'40px'}:{backgroundColor:'#071116',color:'white',padding:'30px',lineBreak:'10px', marginTop:'40px'}}>
  <div className="card-body" style={{fontSize:'20px', fontFamily:'sans-serif'}}>
  Shariq Khan is a third year student in I.T.S Engineering College pursuing B.Tech in Computer Science with a passion of being an enthusiast coder and making his name in the Software and IT industry. He comes from Lucknow with a good educational background and is working hard towards his goals. In his free time, he loves to play music and sing along.
    <br/>Thank You!!
  </div>
    </div>
  )
}
