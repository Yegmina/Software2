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


// When the form is submitted...
const form = getElement("tag", "form")
form.addEventListener('submit', async function(evt) {
    // ... prevent the default action.
    evt.preventDefault();
    // get value of input element
    const query = getValueById("query");
    try {                                               // error handling: try/catch/finally
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);    // starting data download, fetch returns a promise which contains an object of type 'response'
        const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
        console.log(jsonData);    // log the result to the console
        substract_and_print(jsonData);
    } catch (error) {
        console.log(error.message);
    }
});

function substract_and_print(data) {
  //clean previoous
  const target=document.getElementById("results")
  target.innerHTML=" "
  for (let item of data) {
    let item_name=item["show"]["name"] || "none"
    let item_url=item["show"]["url"]
    function getItemMediumImage(item) {
      return item["show"]["image"]?.["medium"] ? item["show"]["image"]["medium"] : "https://via.placeholder.com/210x295?text=Not%20Found";
    }

    let item_medium_image=getItemMediumImage(item) //url

    let item_image_name=item_name
    let item_summary=item["show"]["summary"] || "none"


    let objArticle=document.createElement("article")
    let objH2Name=document.createElement("h2")
    let objAUrl=document.createElement("a")
    objAUrl.target="_blank"
    let objImgMedium=document.createElement("img")


    let objDivSummary=document.createElement("div")


    objH2Name.innerHTML=item_name
    objAUrl.href=item_url
    objAUrl.text=item_url
    objImgMedium.src=item_medium_image
    objImgMedium.alt=item_image_name


    objDivSummary.innerHTML=item_summary

    objArticle.appendChild(objH2Name)
    objArticle.appendChild(objAUrl)
    let objBr=document.createElement("br")
    objArticle.appendChild(objBr)
    objArticle.appendChild(objImgMedium)
    objArticle.appendChild(objDivSummary)


    target.appendChild(objArticle)
  }



}