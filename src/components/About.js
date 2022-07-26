import React,{useState} from 'react'
export default function About(props){
    const [bg,Setbg] = useState({
        color:"white",
        backgroundColor:"black"
    }
    )
    const changemode = ()=>{
        if(bg.backgroundColor==="black" ){
            Setbg({
                color:"black",
                backgroundColor:"white"
            });
        }else{
            Setbg({
                color:"white",
                backgroundColor:"black"
            });
        }
    }
    return(
    <div  >
        <div className="accordion my-5" id="accordionExample" style={bg}>
  <div className="accordion-item" style={bg}>
    <h2 className="accordion-header" id="headingOne">
      <button style={bg} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About TextBook
      </button>
    </h2>
    <div id="collapseOne" style={bg} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div style={bg} className="accordion-body">
        <strong>So The Site Textbook Deals With The Text  .</strong> It Helps An Individual To Edit/Analyze His/her Text Providing Functionality Like Changing The Content In Lowecase,uppercase,capitalise The First Font And So On. 
      </div>
    </div>
  </div>
  <div style={bg} className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button style={bg} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        About developer
      </button>
    </h2>
    <div style={bg} id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div style={bg} className="accordion-body">
        <strong>Name:xys Kumar</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, maiores?
      </div>
    </div>
  </div>
  <div style={bg} className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button style={bg} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Contact Details
      </button>
    </h2>
    <div style={bg} id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div style={bg} className="accordion-body">
        <strong>Lorem ipsum dolor sit amet..</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt explicabo mollitia laborum unde quam? Dolorum autem tempore saepe fugiat atque illum perferendis a laborum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, labore?
      </div>
    </div>
  </div>
</div>
<button className="btn btn-primary my-2 mx-2" onClick={changemode}>change mode</button>
    </div>
    )
}
