  //projectData is object store or app

document.addEventListener('DOMContentLoaded', (event) => {
    myapp.run();
    //alert("Started");
});


const myapp = {run: () => {return myFunction();}};

function myFunction() {
	
  
let sections = document.querySelectorAll('.section');

let mylinks = document.querySelectorAll('.navlink');


//function remove active class
function deactivesec() {
  sections.forEach((elm) => {
      elm.classList.remove('your-active-class'); 
  });
}

function deactivelink() {
   let mylinks = document.querySelectorAll(".navlink");
  mylinks.forEach((elm) => {
      elm.classList.remove('active-nav'); 
  });
}

function setactivelink(cureent_section) {


   let mylinks = document.querySelectorAll(".navlink");
   
    
	
	
	
    mylinks.forEach((element)=> {
		let link_href = element.getAttribute('href');
		if (link_href == "#" + cureent_section) {
			
			element.classList.add("active-nav");
		}
		
		
	});

	
}

//Function to check if an element is in viewport or not
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();

	return (
	    // if the section bigger than the viewport this will return flase we can check only if top in view port or add varince
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight + 220 || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};



window.addEventListener('scroll', function (event) {
    sections.forEach((element)=>{
        //console.log(element);
        if (isInViewport(element)) {
             deactivesec();
			 deactivelink();
             element.classList.add('your-active-class');
             let elm_id = element.id;
			 //alert(elm_id);
			 setactivelink(elm_id);
            //console.log('In viewport!');
        } else if(window.scrollY==0) {
             deactivesec();
			 deactivelink();
            //console.log('No Change');
        }
    }, false);
});	
  const projectData = {
    
    topic_counts: 0,
    topic_titles: [],
    section_id: [],
    ulid: "",
    navContainers: [],
    navClass: [],
    mylinks: [],
    create_nav: function() {
       let x = 1;
       const fragment = document.createDocumentFragment();
       for (var i=0; i < allSections.length; i++) {
         let newli = document.createElement('li');
         let newlink = document.createElement('a');
         let title = projectData.topic_titles[i];
         let newtext = document.createTextNode(title);
         
         newli.class = "section";
         newli.id = "link" + x;
		 
		 let att = document.createAttribute("href");
		 att.value = "#section" + x;
		 x += 1;
         newlink.className = "navlink";
		 newlink.setAttributeNode(att);
         //newlink.href = "#" + projectData.section_id[i];
          //projectData.mylinks.push(newli.id);
          
          newlink.appendChild(newtext);
          newli.appendChild(newlink);
          fragment.appendChild(newli);
       }
       x = 0;
       myul.appendChild(fragment);
       
    }
    
  
  };
  



  // get all divs 
  const allSections = document.querySelectorAll(".landing__container");
  
  // loop using for of loop then get section firstElementChild.title
  for (sec of allSections) {
  
  // get the firstElementChild Value which H2 or section title to store it
  const section_title = sec.firstElementChild.textContent;
  
  
  // get section title h2 
  projectData.topic_titles.push(section_title);
  
  // get all section elements
  const section_parent = sec.parentElement;
  
  // get sections id 
  const section_id = section_parent.id;
  
  // push sections id to nav
  projectData.section_id.push(section_id);
  
  
  // test step
  //alert(projectData.section_id);
  }
  
  // get topic_counts or sections count
  projectData.topic_counts = projectData.topic_titles;
  
  
  
  
  /* ---------------------##############-------------------------------------------*/
                            // Nav Menu
  /* ---------------------##############-------------------------------------------*/
  
  // get the ul element using HTML DOM
  const myul = document.getElementById("navbar__list");
  
  // get the ul element
  projectData['ul'] = myul;
  
  
  // get the ul id
  projectData['ulid'] = projectData.ul.id;
  //alert(projectData.ulid);
  
  
  // feature li 
  let allli = document.querySelectorAll(".section");
  //alert(allli);
  
  
  // get the nav container
  let mynav = myul.parentElement;
  
  let mynav_class = myul.parentElement;
  
  // get nav class name
  //alert(mynav.className);
  
  
  projectData.create_nav();
  }
  
  
  




