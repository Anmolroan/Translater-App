async function getallLang(){
   let res =await fetch('https://libretranslate.de/languages') ;
   let data =await res.json();
   console.log(data)
   options(data)
}
getallLang()
function options(data){
    let select=document.getElementById("select")
    data.forEach((el) => {
        let opt = document.createElement(`option`);
        opt.value = el.code;
        opt.textContent = el.name;
        select.append(opt);
      });
}
async function anuvad(){
    var entertext=document.getElementById("entertext").value;
    var select=document.getElementById("select");
  var selected=select.value

    datatosend={
q:entertext,
source:"en",
target:selected
    };

    let res = await fetch("https://libretranslate.de/translate",{
        method:"POST",
        body:JSON.stringify(datatosend),
        headers:{"Content-Type" :"application/json"}
        
    });
    let data = await res.json();
    var outtext=document.getElementById("outtext");
    outtext.value=null;
    outtext.value=data.translatedText;
  
    console.log(data)
}

function record() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";

    recognition.onresult = function(event) {
        // console.log(event);
        // document.getElementById('speechToText').value = event.results[0][0].transcript;
        var entertext=document.getElementById("entertext");
        entertext.value= event.results[0][0].transcript;
    }
    recognition.start();

}
