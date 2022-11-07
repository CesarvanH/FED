// JavaScript Document
// information controll
//first dropdown
var informationButton1 = document.querySelector(
	'section:nth-of-type(3) section:nth-of-type(1) button'
);
var informationHeader1 = document.querySelector(
	'section:nth-of-type(3) section:nth-of-type(1) h3'
);
var informationSectie1 = document.querySelector(
	'section:nth-of-type(3) section:nth-of-type(1)'
);

informationButton1.addEventListener('click', toggleInformationInfo1);
informationHeader1.addEventListener('click', toggleInformationInfo1);

function toggleInformationInfo1() {
	informationSectie1.classList.toggle('open');
}

//second dropdown
var informationButton2 = document.querySelector(
	'section:nth-of-type(3) section:nth-of-type(2) button'
);
var informationHeader2 = document.querySelector(
	'section:nth-of-type(3) section:nth-of-type(2) h3'
);
var informationSectie2 = document.querySelector(
	'section:nth-of-type(3) section:nth-of-type(2)'
);

informationButton2.addEventListener('click', toggleInformationInfo2);
informationHeader2.addEventListener('click', toggleInformationInfo2);

function toggleInformationInfo2() {
	informationSectie2.classList.toggle('open');
}

//third dropdown
var informationButton3 = document.querySelector(
	'section:nth-of-type(3) section:nth-of-type(3) button'
);
var informationHeader3 = document.querySelector(
	'section:nth-of-type(3) section:nth-of-type(3) h3'
);
var informationSectie3 = document.querySelector(
	'section:nth-of-type(3) section:nth-of-type(3)'
);

informationButton3.addEventListener('click', toggleInformationInfo3);
informationHeader3.addEventListener('click', toggleInformationInfo3);

function toggleInformationInfo3() {
	informationSectie3.classList.toggle('open');
}

//forth dropdown
var informationButton4 = document.querySelector(
	'section:nth-of-type(3) section:nth-of-type(4) button'
);
var informationHeader4 = document.querySelector(
	'section:nth-of-type(3) section:nth-of-type(4) h3'
);
var informationSectie4 = document.querySelector(
	'section:nth-of-type(3) section:nth-of-type(4)'
);

informationButton4.addEventListener('click', toggleInformationInfo4);
informationHeader4.addEventListener('click', toggleInformationInfo4);

function toggleInformationInfo4() {
	informationSectie4.classList.toggle('open');
}
