var firstVariable = null;
var secondVariable = null;
var operant = null;
var operantPrev = null;
var result = null;
var bools = false;
var minus = false;
var isNull = true;
var clicked = false;

function operationClick(operation){
	bools = false;
		switch(operation){
			case '+':
			operant = '+';
			minus = false; break;
			case '-': 
			operant = '-'; 
				break;
			case '/': 
			operant = '/';
			minus = false;
				break;
			case '*': 
			operant = '*';
			minus = false;
				break;
		}
	 if(!clicked && operant!=null){imEqual(operantPrev); clicked= true; operantPrev=operant;}else{operantPrev = operant;document.getElementById("resultWindow").value = null;}
	document.getElementById("operantWindow").value = operant;
}

function digitClick(tag){
	document.getElementById("operantWindow").value = null;
	clicked = false;
	if(operant!=null){
		if(!bools)if(result!=null || secondVariable!=null){bools = true; secondVariable = null;}
			bools = true;
			secondVariable = (secondVariable * 10) + tag ;
			document.getElementById("resultWindow").value = secondVariable;
	}else{
		if(!bools)if(result!=null){bools = true; firstVariable= null; secondVariable = null;}
			bools = true;
			if(minus){firstVariable = (firstVariable * 10) - tag ;}else{firstVariable = (firstVariable * 10) + tag ;}
			document.getElementById("resultWindow").value = firstVariable;
	}
}

function operationEqual(){
	document.getElementById("operantWindow").value = null;	
	clicked = true;
	if(result == 0){
		firstVariable = null;
	}
	bools = false;
	if (secondVariable == null && result == null) {secondVariable = firstVariable;}else{if(!result==0 && isNull==false){firstVariable = result;}}
		switch(operant){
		case '+':
	document.getElementById("resultWindow").value = result =  firstVariable + secondVariable;
		isNull = false;
			break;
		case '-': 
	document.getElementById("resultWindow").value = result = firstVariable - secondVariable;
		isNull = false;
			break;
		case '/': 
		if ( secondVariable != 0){
	document.getElementById("resultWindow").value = result = firstVariable / secondVariable;
		isNull = false;
		}else{	document.getElementById("resultWindow").value = "error"; result = 0;}
			break;
		case '*': 
	document.getElementById("resultWindow").value = result = firstVariable * secondVariable;
		isNull = false;
			break;
	}
}
function imEqual(op){
	
	document.getElementById("operantWindow").value = null;
	if(result == 0){
		firstVariable = null;
	}
	bools = false;
	if (secondVariable == null && result == null) {secondVariable = firstVariable;}else{if(!result==0 && isNull==false){firstVariable = result;}}
		switch(op){
		case '+':
	document.getElementById("resultWindow").value = result =  firstVariable + secondVariable;
		isNull = false;
			break;
		case '-': 
	document.getElementById("resultWindow").value = result = firstVariable - secondVariable;
		isNull = false;
			break;
		case '/': 
		if ( secondVariable != 0){
	document.getElementById("resultWindow").value = result = firstVariable / secondVariable;
		isNull = false;
		}else{	document.getElementById("resultWindow").value = "error"; result = 0;}
			break;
		case '*': 
	document.getElementById("resultWindow").value = result = firstVariable * secondVariable;
		isNull = false;
			break;
	}
}
function clearClick(){
	document.getElementById("operantWindow").value = null;
	minus = false;
	isNull = true;
	result = null;
	operant = null;
	clicked = false;
	secondVariable = null;
	firstVariable = null;
	operantPrev = null;
	document.getElementById("resultWindow").value = null;
}
