// JavaScript Document
//menu controll
var menuButton = document.querySelector('header nav:nth-of-type(1) button');

var menu = document.querySelector('header nav:nth-of-type(2)');

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
	menu.classList.toggle('open');
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
	'footer section:nth-of-type(5) button'
);
var deFooterHeader5 = document.querySelector(
	'footer section:nth-of-type(5) h2'
);
var footerSectie5 = document.querySelector('footer section:nth-of-type(5)');

deFooterButton5.addEventListener('click', toggleFooterInfo5);
deFooterHeader5.addEventListener('click', toggleFooterInfo5);

function toggleFooterInfo5() {
	footerSectie5.classList.toggle('open');
}
