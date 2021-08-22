const displayInput=document.getElementById("display");

displayInput.onkeyup=(e)=>{
    let displayText=e.target.value;
    let wordArr= displayText.split(" ");
    let  wordCount=wordArr.length;
     if(wordArr[wordCount-1]==""){
        document.getElementById("word-count").innerText=wordCount-1;
     }else{
        document.getElementById("word-count").innerText=wordCount;
     }
    

    
}