// JavaScript Document
// footer controll
//first drop down
var deButton1 = document.querySelector('footer section:nth-of-type(1) button');
var deHeader1 = document.querySelector('footer section:nth-of-type(1) h2');
var footerSectie1 = document.querySelector('footer section:nth-of-type(1)');

deButton1.addEventListener('click', toggleFooterInfo1);
deHeader1.addEventListener('click', toggleFooterInfo1);

function toggleFooterInfo1() {
	footerSectie1.classList.toggle('open');
}
//second dropdown
var deButton2 = document.querySelector('footer section:nth-of-type(2) button');
var deHeader2 = document.querySelector('footer section:nth-of-type(2) h2');
var footerSectie2 = document.querySelector('footer section:nth-of-type(2)');

deButton2.addEventListener('click', toggleFooterInfo2);
deHeader2.addEventListener('click', toggleFooterInfo2);

function toggleFooterInfo2() {
	footerSectie2.classList.toggle('open');
}

//second dropdown
var deButton2 = document.querySelector('footer section:nth-of-type(2) button');
var deHeader2 = document.querySelector('footer section:nth-of-type(2) h2');
var footerSectie2 = document.querySelector('footer section:nth-of-type(2)');

deButton2.addEventListener('click', toggleFooterInfo2);
deHeader2.addEventListener('click', toggleFooterInfo2);

function toggleFooterInfo2() {
	footerSectie2.classList.toggle('open');
}
