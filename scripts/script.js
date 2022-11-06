// JavaScript Document
// information controll
//first dropdown
var informationButton1 = document.querySelector(
	'main > section:nth-of-type(6) section:nth-of-type(1) button'
);
var informationHeader1 = document.querySelector(
	'main > section:nth-of-type(6) section:nth-of-type(1) h3'
);
var informationSectie1 = document.querySelector(
	'main > section:nth-of-type(6) section:nth-of-type(1)'
);

informationButton1.addEventListener('click', toggleInformationInfo1);
informationHeader1.addEventListener('click', toggleInformationInfo1);

function toggleInformationInfo1() {
	informationSectie1.classList.toggle('open');
}

//second dropdown
var informationButton2 = document.querySelector(
	'main > section:nth-of-type(6) section:nth-of-type(2) button'
);
var informationHeader2 = document.querySelector(
	'main > section:nth-of-type(6) section:nth-of-type(2) h3'
);
var informationSectie2 = document.querySelector(
	'main > section:nth-of-type(6) section:nth-of-type(2)'
);

informationButton2.addEventListener('click', toggleInformationInfo2);
informationHeader2.addEventListener('click', toggleInformationInfo2);

function toggleInformationInfo2() {
	informationSectie2.classList.toggle('open');
}

//third dropdown
var informationButton3 = document.querySelector(
	'main > section:nth-of-type(6) section:nth-of-type(3) button'
);
var informationHeader3 = document.querySelector(
	'main > section:nth-of-type(6) section:nth-of-type(3) h3'
);
var informationSectie3 = document.querySelector(
	'main > section:nth-of-type(6) section:nth-of-type(3)'
);

informationButton3.addEventListener('click', toggleInformationInfo3);
informationHeader3.addEventListener('click', toggleInformationInfo3);

function toggleInformationInfo3() {
	informationSectie3.classList.toggle('open');
}

//forth dropdown
var informationButton4 = document.querySelector(
	'main > section:nth-of-type(6) section:nth-of-type(4) button'
);
var informationHeader4 = document.querySelector(
	'main > section:nth-of-type(6) section:nth-of-type(4) h3'
);
var informationSectie4 = document.querySelector(
	'main > section:nth-of-type(6) section:nth-of-type(4)'
);

informationButton4.addEventListener('click', toggleInformationInfo4);
informationHeader4.addEventListener('click', toggleInformationInfo4);

function toggleInformationInfo4() {
	informationSectie4.classList.toggle('open');
}

// footer controll
//first drop down
var deFooterButton1 = document.querySelector(
	'footer section:nth-of-type(1) button'
);
var deFooterHeader1 = document.querySelector(
	'footer section:nth-of-type(1) h2'
);
var footerSectie1 = document.querySelector('footer section:nth-of-type(1)');

deFooterButton1.addEventListener('click', toggleFooterInfo1);
deFooterHeader1.addEventListener('click', toggleFooterInfo1);

function toggleFooterInfo1() {
	footerSectie1.classList.toggle('open');
}
//second dropdown
var deFooterButton2 = document.querySelector(
	'footer section:nth-of-type(2) button'
);
var deFooterHeader2 = document.querySelector(
	'footer section:nth-of-type(2) h2'
);
var footerSectie2 = document.querySelector('footer section:nth-of-type(2)');

deFooterButton2.addEventListener('click', toggleFooterInfo2);
deFooterHeader2.addEventListener('click', toggleFooterInfo2);

function toggleFooterInfo2() {
	footerSectie2.classList.toggle('open');
}

//third dropdown
var deFooterButton3 = document.querySelector(
	'footer section:nth-of-type(3) button'
);
var deFooterHeader3 = document.querySelector(
	'footer section:nth-of-type(3) h2'
);
var footerSectie3 = document.querySelector('footer section:nth-of-type(3)');

deFooterButton3.addEventListener('click', toggleFooterInfo3);
deFooterHeader3.addEventListener('click', toggleFooterInfo3);

function toggleFooterInfo3() {
	footerSectie3.classList.toggle('open');
}

//forth dropdown
var deFooterButton4 = document.querySelector(
	'footer section:nth-of-type(4) button'
);
var deFooterHeader4 = document.querySelector(
	'footer section:nth-of-type(4) h2'
);
var footerSectie4 = document.querySelector('footer section:nth-of-type(4)');

deFooterButton4.addEventListener('click', toggleFooterInfo4);
deFooterHeader4.addEventListener('click', toggleFooterInfo4);

function toggleFooterInfo4() {
	footerSectie4.classList.toggle('open');
}

//fifth dropdown
var deFooterButton5 = document.querySelector(
	'footer section:nth-of-type(6) button'
);
var deFooterHeader5 = document.querySelector(
	'footer section:nth-of-type(6) h2'
);
var footerSectie5 = document.querySelector('footer section:nth-of-type(6)');

deFooterButton5.addEventListener('click', toggleFooterInfo5);
deFooterHeader5.addEventListener('click', toggleFooterInfo5);

function toggleFooterInfo5() {
	footerSectie5.classList.toggle('open');
}
