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

        let articleOne = document.createElement('div')
        document.getElementById ("bottomContainer").append(articleOne)
        articleOne.id="article1"
        articleOne.className ="article"
        
        let articleOneName = document.createElement("p");
        articleOneName.innerHTML = "Doors Of Steel, Wings of Time";
        articleOneName.className = "article-name"
        document.getElementById("article1").appendChild(articleOneName);

        let articleOneDescription = document.createElement("p");
        articleOneDescription.innerHTML = "Why the DeLorean may be the ideal container for chronological travel";
        articleOneDescription.className = "article-description"
        document.getElementById("article1").appendChild(articleOneDescription);

        let articleHR = document.createElement("hr")
        document.getElementById('article1').appendChild(articleHR);

        
        let articleTwo = document.createElement('div')
        document.getElementById ("bottomContainer").append(articleTwo)
        articleTwo.id="article2"
        articleTwo.className ="article"
        
        let articleTwoName = document.createElement("p");
        articleTwoName.innerHTML = "1.21 gigawatts in a bottle";
        articleTwoName.className = "article-name"
        document.getElementById("article2").appendChild(articleTwoName);

        let articleTwoDescription = document.createElement("p");
        articleTwoDescription.innerHTML = "The consideration of lightening as a replacement for plutonium";
        articleTwoDescription.className = "article-description"
        document.getElementById("article2").appendChild(articleTwoDescription);

        let articleHR2 = document.createElement("hr")
        document.getElementById('article2').appendChild(articleHR2);


        let articleThree = document.createElement('div')
        document.getElementById ("bottomContainer").append(articleThree)
        articleThree.id="article3"
        articleThree.className ="article"
        
        let articleThreeName = document.createElement("p");
        articleThreeName.innerHTML = "Jig dressed Man";
        articleThreeName.className = "article-name"
        document.getElementById("article3").appendChild(articleThreeName);

        let articleThreeDescription = document.createElement("p");
        articleThreeDescription.innerHTML = "Exploring the influence of 1880's folk dance on ZZ top";
        articleThreeDescription.className = "article-description"
        document.getElementById("article3").appendChild(articleThreeDescription);

    }

    // let bottomContainer = document.createElement("div");
    //     bottonContainer.innerText = 

    // <div class="bottom-container">
    // <div class="article">
    //     <p class="article-name">Doors Of Steel, Wings of Time</p>
    //     <p class="article-description">Why the DeLorean may be the ideal container for chronological travel</p>
    //     <hr>
    // </div>
    // <div class="article">
    //     <p class="article-name">1.21 gigawatts in a bottle</p>
    //     <p class="article-description">The consideration of lightening as a replacement for plutonium</p>
    //     <hr>
    // </div>
    // <div class="article">
    //     <p class="article-name">Jig Dressed Man</p>
    //     <p class="article-description">Exploring the influence of 1880's folk dance on ZZ top</p>

    // </div>
    
    // </div>