import React,{useState} from 'react'

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
export const InputText = (props) => {
  const [text,setText] = useState('');
    // setText('new Text');
    const changeToUpperCase = ()=>{
        console.log("Upper Case is Clicked success")
        let newText = text.toUpperCase();
       
        // text===newText?props.showAlert("Already in Upper Case","warning"):(setText(newText),props.showAlert("Changed to UpperCase","success"));
        if(text===newText)
        {
          props.showAlert("Already in Upper Case","warning")
          
        }
        else{
          setText(newText);
          props.showAlert("Changed to UpperCase","success")
        }
        console.log("Count",text.length)
        text.length===0?props.showAlert("No Text to Convert","warning"):console.log("Text is more than 1 character");
          

    }

    const changeToLowerCase = ()=>{
        console.log("ToLowerCase is Clicked")
        let newText = text.toLowerCase();
        if(text===newText)
        {
          props.showAlert("Already in Lower Case","warning")
          
        }
        else{
          setText(newText);
          props.showAlert("Changed to LowerCase","success")
        }
        text.length===0?props.showAlert("No Text to Convert","warning"):console.log("Text is more than 1 character");


    }

    const UpdatedText = (event)=>{
        console.log("Updated text is Called");
        setText(event.target.value)
        console.log(event.target.value);
    }
    const changeToClearText = ()=>{
        let newText="";
        setText(newText); 
        text.length===0?props.showAlert("No Text to Clear","warning"):props.showAlert("Text is cleared","success");   
        
      }
      const changeToCopyText = ()=>{  
      text.length===0?props.showAlert("No Text to Copy","warning"):props.showAlert("Copy to Clipboard","success");
      var copiedText = document.getElementById("exampleFormControlTextarea1");
      console.log(copiedText.select());
      copiedText.select();
      copiedText.setSelectionRange(0,9999);
      navigator.clipboard.writeText(copiedText.value);
      
    }

    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      // props.showAlert("Copied to clipboard","success");
      text.length===0?props.showAlert("No Text to Remove Extra Spaces","warning"):props.showAlert("Removed Extra Spaces","success");

    }

    return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        {/* <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label> */}
        
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
        <textarea  className="form-control" value={text} onChange={UpdatedText} style= {{backgroundColor: props.mode==='dark'?'#17253a':'white',color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8" ></textarea>
        {/* <button className=''></button> */}
       <button className='btn btn-primary m-3' onClick={changeToUpperCase}>Convert to UpperCase</button>
       <button className='btn btn-primary m-3' onClick={changeToLowerCase}>Convert to LowerCase</button>
       <button className='btn btn-primary m-3' onClick={changeToClearText}>Clear text</button>
       <button className='btn btn-primary m-3' onClick={changeToCopyText}>Copy text</button>
       <button className='btn btn-primary m-3' onClick={handleExtraSpaces}>Remove Extra Space</button>
      </div>
      <div className='container m-3' style={{color:props.mode==='dark'?'white':'black'}}>
      <p>Total Word:{text.length===0?"0":text.split(" ").length}</p>
      <p>Total Alphabet: {text.length} </p> 
      <p>{text.length===0?"0":0.008*text.split(" ").length} Minute read</p>
      <h3>Preview Text</h3>
      <p>{text.length===0?' Enter Something to preview it':text}</p>
      </div>
      {/* <h1>Total Word: {text.lenght}</h1> */}
</div>
    </>
  )
}
