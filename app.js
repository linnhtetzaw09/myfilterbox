
//UI

let getinput = document.getElementById('search');

let   getsortazm1 = document.getElementById('sortazm1'),
      getsortzam1 = document.getElementById('sortzam1'),
      getsortazm2 = document.getElementById('sortazm2'),
      getsortzam2 = document.getElementById('sortzam2');
    
const getul = document.getElementById('members');
const getlis = getul.getElementsByTagName('li');

// console.log(getlis[0]);

getinput.addEventListener('keyup',filter);

getsortazm1.addEventListener('click',sortingazm1);
getsortzam1.addEventListener('click',sortingzam1);


function filter(){

    const filter = this.value.toLowerCase();
    // console.log(filter);

    for(let x = 0; x < getlis.length; x++){
        // console.log(x);

        // gelink = getlis[x].getElementsByTagName('a');
        // gelink = getlis[x].getElementsByTagName('a')[0];
        getlink = getlis[x].querySelector('a');
        console.log(getlink);

        const getatext = getlink.textContent || getlink.innerText;
        // console.log(getatext);
        // console.log(getatext.toLowerCase());

        if(getatext.toLowerCase().indexOf(filter) > -1){
            getlis[x].style.display = "";
        }else{
            getlis[x].style.display = "none";
        }

    }
}


//Method 1

function sortingazm1(){

    let lis = Array();

    for(let i = 0; i < getlis.length; i++){
        // console.log(getlis[i].innerHTML);

        lis.push(getlis[i].textContent);
    }

    const azresults = lis.sort();

    getul.innerHTML = "";

    azresults.forEach(function (azresult){
        // console.log(azresult);

        const newli = document.createElement('li');
        const newlink = document.createElement('a');
        newlink.href = "javascript:voiid(0)";

        newlink.appendChild(document.createTextNode(azresult));

        newli.appendChild(newlink);

        getul.appendChild(newli);

    }
    )
}


//Method 2

function sortingzam1(){

    let lis = Array();

    for(let i = 0; i < getlis.length; i++){

        lis.push(getlis[i].textContent);
    }

    const azresults = lis.sort().reverse();

    getul.innerHTML = "";

    azresults.forEach(function (azresult){
        // console.log(azresult);

        const newli = document.createElement('li');
        const newlink = document.createElement('a');
        newlink.href = "javascript:voiid(0)";

        newlink.appendChild(document.createTextNode(azresult));

        newli.appendChild(newlink);

        getul.appendChild(newli);

    }
    )
}

