var firstVariable = null;
var secondVariable = null;
var operant = null;
var result = null;
var bools = false;
var isNull = true;

function operationClick(operation){
	bools = false;
		switch(operation){
			case '+':
			operant = '+';
				break;
			case '-': 
			operant = '-';
				break;
			case '/': 
			operant = '/';
				break;
			case '*': 
			operant = '*';
				break;
		}
		document.getElementById("resultWindow").value = null;
}

function digitClick(tag){
	if(operant!=null){
		if(!bools)if(result!=null || secondVariable!=null){bools = true;firstVariable=null; secondVariable = null;}
		secondVariable = (secondVariable * 10) + tag ;
		document.getElementById("resultWindow").value = secondVariable;
	}else{
		if(!bools)if(result!=null){bools = true; firstVariable= null; secondVariable = null;}
		firstVariable = (firstVariable * 10) + tag ;
		document.getElementById("resultWindow").value = firstVariable;
	}
}

function operationEqual(){
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

function clearClick(){
	isNull = true;
	result = null;
	operant = null;
	clicked = false;
	secondVariable = null;
	firstVariable = null;
	document.getElementById("resultWindow").value = null;
}