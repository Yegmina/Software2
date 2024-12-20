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
    //alert("Different tags with same id found! Check HTML code and fix this!")
    console.error("Different tags with same id found! Check HTML code and fix this!")
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

getElement("id", "source").addEventListener('submit',
    function(event){
      event.preventDefault();
      let name=getValueByName("firstname")
      let lastname=getValueByName("lastname")
      let objP=getElement("id", "target")
      objP.innerText="Your name is "+name+" "+lastname
    }


    );

