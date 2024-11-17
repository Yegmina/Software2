'use strict';

/* start of the template */
const debug_phase = "pre-alfa";

/*get functions*/
function getValueByName(local_name) {
  const element = getElement('name', local_name);
  return element ? element.value : null;
}

function getValueById(local_id) {
  const element = getElement('id', local_id);
  return element ? element.value : null;
}

function getValueByTagName(local_tag) {
  const element = getElement('tag', local_tag);
  return element ? element.value : null;
}

function getValueByClassName(local_class) {
  const element = getElement('class', local_class);
  return element ? element.value : null;
}


function getElement(selector, value) {
  let elements;

  switch (selector) {
    case 'name':
      elements = document.getElementsByName(value);
      break;
    case 'id':
      elements = document.querySelectorAll(`#${value}`);
      break;
    case 'tag':
      elements = document.getElementsByTagName(value);
      break;
    case 'class':
      elements = document.getElementsByClassName(value);
      break;
    default:
      console.log(`Unknown selector type: ${selector}`);
      return null;
  }

  if (!elements || elements.length === 0) {
    console.log(`No element found with ${selector}: ${value}`);
    return null;
  } else if (elements.length > 1 && selector !== 'id') {
    console.log(`Unexpected duplicates with the same ${selector}: ${value}`);
    return elements;
  }
  else if (elements.length > 1 && selector === 'id') {
    alert("Different tags with same id found! Check HTML code and fix this!")
    console.log(`Unexpected duplicates with the same ${selector}: ${value}`);
    return elements;
  }

  return elements[0];
}

/*get function end*/

/* alert and console log functions, debuging etc */

// Overriding the alert function conditionally based on debug_phase;
function alert(string) {
  if (debug_phase === "pre-alfa") {
    window.alert(string); // Shows alert during pre-alfa phase
    //it is used only for starting phases of debug in order to stop webapp etc
  } else {
    console.error(string); // Logs errors to the console in other phases
    //it is better to use console error because it does not stop the execution
  }
}


/* end */


/* end of the template*/


const picArray = [
  {
    title: 'Title 1',
    caption: 'Caption 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    image: {
      large: 'img/pic1.jpg',
      medium: 'thumbnails/pic1.jpg',
    },
  },
  {
    title: 'Title 2',
    caption: 'Caption 2',
    description:
      'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    image: {
      large: 'img/pic2.jpg',
      medium: 'thumbnails/pic2.jpg',
    },
  },
  {
    title: 'Title 3',
    caption: 'Caption 3',
    description:
      'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    image: {
      large: 'img/pic3.jpg',
      medium: 'thumbnails/pic3.jpg',
    },
  },
  {
    title: 'Title 4',
    caption: 'Caption 4',
    description:
      'Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    image: {
      large: 'img/pic4.jpg',
      medium: 'thumbnails/pic4.jpg',
    },
  },
  {
    title: 'Title 5',
    caption: 'Caption 5',
    description:
      'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. ',
    image: {
      large: 'img/pic5.jpg',
      medium: 'thumbnails/pic5.jpg',
    },
  },
  {
    title: 'Title 6',
    caption: 'Caption 6',
    description:
      'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh.',
    image: {
      large: 'img/pic6.jpg',
      medium: 'thumbnails/pic6.jpg',
    },
  },
  {
    title: 'Title 7',
    caption: 'Caption 7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    image: {
      large: 'img/pic7.jpg',
      medium: 'thumbnails/pic7.jpg',
    },
  },
  {
    title: 'Title 8',
    caption: 'Caption 8',
    description:
      'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. ',
    image: {
      large: 'img/pic8.jpg',
      medium: 'thumbnails/pic8.jpg',
    },
  },
  {
    title: 'Title 9',
    caption: 'Caption 9',
    description:
      'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. ',
    image: {
      large: 'img/pic9.jpg',
      medium: 'thumbnails/pic9.jpg',
    },
  },
];

// add your code here
for (let i=0; i<picArray.length; i++) {
  let objArticle = document.createElement("article")
  objArticle.className="card"
  let objH2 =document.createElement("h2")
  objH2.innerText=picArray[i]['title']
  let objFigure = document.createElement("figure")
  let objImg=document.createElement("img")
  objImg.src=picArray[i]["image"]["medium"]
  objImg.alt=picArray[i]['title']
  let objFigcaption=document.createElement("figcaption")
  objFigcaption.innerText=picArray[i]["caption"]
  let objP=document.createElement("p")
  objP.innerText=picArray[i]["description"]
  let target=document.getElementById("pictures")



  objFigure.appendChild(objImg)
  objFigure.appendChild(objFigcaption)
  objArticle.appendChild(objH2)
  objArticle.appendChild(objFigure)
  objArticle.appendChild(objP)
  target.appendChild(objArticle)


  objArticle.addEventListener('click', function(){

    let objModalImage=getElement("id", "modal_image")
    objModalImage.src=picArray[i]["image"]["large"]
    objModalImage.alt=picArray[i]["title"]

    let objModalDialog=getElement("id", "modal_dialog")
    objModalDialog.showModal()


    /*closing*/
    let objModalSpan=getElement("id", "modal_span")
    objModalSpan.addEventListener("click", function(){

      objModalDialog.close();
      /*one problem with span is that it looks like text X,
      I mean when cursor is over it, it show it just like text,
      do not convert in "clickable" version.
      So I would like to use button for example or
      modify css for adding some square borders and
      js for cursor converting,
      but it is not necessary for task
       */

    })

  })

}

