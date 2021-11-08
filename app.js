document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  //create request
  const xhr = new XMLHttpRequest();
  //console.log('READYSTATE:', xhr.readyState);
  //OPEN

  xhr.open('GET', 'data.txt', true);
  console.log('READYSTATE:', xhr.readyState);

  xhr.onprogress = function () {
    //use this property to display a spinner/loader
    //during readystate 2 processing request
    console.log('READYSTATE:', xhr.readyState);
  };

  xhr.onerror = function () {
    //just in case of error during processing
    console.log('error');
  };

  xhr.onload = function () {
    //used to have to check for readystate 4 along with
    //status 200, not needed now [&& xhr.readyState === 4]
    if (this.status === 200) {
      //console.log(this.responseText);
      document.getElementById(
        'output'
      ).innerHTML = `<p>${this.responseText}</p>`;
    }
  };

  xhr.onreadystatechange = function () {
    console.log('READYSTATE:', xhr.readyState);
  };

  xhr.send();
}

//ready state values:
//0: not initialied
//1: server connection established
//2: request received
//3: processing request
//4: request is finished and response is ready

/*HTTP common statuses:
//200: "OK"
//403: "Forbidden"
//404: "Not Found" */
