function handleSubmit(event) {
    event.preventDefault()
    const postData = async ( url = '', data = {})=>{
        console.log(data,'here')
          const res = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data), // body data type must match "Content-Type" header        
        });
          console.log(res.body,'should finish the transform')
          try {
            const newData = await res.json();
            console.log(newData,'new try hello');
            return newData
          }catch(error) {
          console.log("error", error);
          // appropriately handle the error
          }
      }

    // check what text was put into the form field
    const formText ={url:document.getElementById('name').value}; 
    document.getElementById('isurl').innerHTML = Client.checkForName(formText.url);
    
    //console.log("::: Form Submitted :::")
    //fetch('http://localhost:8081/test')
    
    postData('http://localhost:8081/test',formText)
    //console.log(formText)
    //Client.checkForName(formText)
    //.then(res => res.json())
    //.then(function(res) {
     //   document.getElementById('results').innerHTML = res.message1
    //})
    
    
}

export { handleSubmit }


