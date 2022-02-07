function clickMe(){
    let myElement = document.getElementById('docd');
    myElement.style.display = 'inline-block';
    myElement.style.position = 'absolute';
    myElement.style.padding = '20px';
    myElement.style.marginLeft = '100px';
    myElement.style.marginRight = '400px';
    myElement.style.border = '1px solid #0637AA';
    myElement.style.marginTop = '0px';
    myElement.style.fontWeight = 'bold';
    myElement.style.fontFamily = 'Courier New';
    myElement.style.fontSize = 'larger';

    let myBody = document.getElementById('styleBody')
    myBody.style.margin = '0px';
    myBody.style.padding = '0px';
    myBody.style.backgroundColor = '#F6E6D6';

    let myMid = document.getElementById('mid-cont');
    myMid.style.backgroundColor = '#F4D002';

    let eventHeader = document.getElementsByClassName('event-name');
        for(i = 0; i < eventHeader.length; i ++){
            eventHeader[i].style.fontWeight = "bold";
        }
    
    let docPic = document.getElementById('docpic');
    docPic.style.border = '5px inset black';
    docPic.style.width = '400px';

    let styleButton = document.getElementsByClassName('style-button');
        for(i = 0; i < styleButton.length; i ++){
            styleButton[i].style.fontSize = "100%";
            styleButton[i].style.color = '#F7E1D0';
        }

    let nameHeader = document.getElementById('name-header');
        nameHeader.style.textAlign = "center";
        nameHeader.style.color = "#0637AA";
        nameHeader.style.margin = "50px";
        nameHeader.style.fontFamily = "Times New Roman";
    }
