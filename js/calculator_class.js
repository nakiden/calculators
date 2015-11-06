   function Calculator() {
       //numeric variables
       this.firstVariable = null;
       this.secondVariable = null;
       this.result = null;
       //string variables
       this.operantWindowName = "operationWindow";
       this.resultWindowName = "resultWindow";
       this.operant = null;
       this.operantPrev = null;
       //boolean variables
       this.isOneTimeClicked = false;
       this.isFirstOperatorNegative = false;
       this.isResultNull = true;
       this.isOperatorClicked = false;

       /**
        * set element's value to null
        * @param id identifier of element
        */
       this.releaseValue = function(id) {
           var line = "#" + id;
           $(line).val(" ");
           //document.getElementById(id).value = null;
       };

       /**
        * update element's value
        * @param id identifier of element
        * @param value value to be set
        */
       this.setValue = function(id, value) {
           var line = "#" + id;
           $(line).val(value);
           //document.getElementById(id).value = value;
       };

       /**
        * changes variables depending on conditions
        */
       this.resetValues = function(){

           if (this.secondVariable == null && this.result == null) {
               this.secondVariable = this.firstVariable;
           } else {

               if (!(this.result == 0) && this.isResultNull == false) {
                   this.firstVariable = this.result;
               }
           }
       };

       /**
        * event called when button '=' pressed, it calls calculate function
        */
       this.equalButtonPressed = function() {
           this.isOperatorClicked = true;
           this.preEqualSettings();
           this.calculate(this.operant);
       };

       /**
        * function is used to set parameters for calculation
        */
       this.preEqualSettings = function(){
           this.releaseValue(this.operantWindowName);

           if (this.result == 0) {
               this.firstVariable = null;
           }

           this.isOneTimeClicked = false;
           this.resetValues();
       };


       /**
        * event called when digit button pressed, it puts button's number to result window and sets variables
        * @param tag Kind of digit
        */
       this.digitButtonClick = function(tag) {
           tag = parseInt(tag);
           this.releaseValue(this.operantWindowName);
           this.isOperatorClicked = false;

           if (this.operant != null) {

               if (!this.isOneTimeClicked) {

                   if (this.result !=null || this.secondVariable != null) {
                       this.isOneTimeClicked = true;
                       this.secondVariable = null;
                   }
               }
               this.isOneTimeClicked = true;
               this.secondVariable = (this.secondVariable * 10) + tag ;
               this.setValue(this.resultWindowName,this.secondVariable);
           } else {

               if (!this.isOneTimeClicked) {
                   if (this.result != null) {
                       this.isOneTimeClicked = true;
                       this.firstVariable = null;
                       this.secondVariable = null;
                   }
               }

               this.isOneTimeClicked = true;

               if (this.isFirstOperatorNegative) {
                   this.firstVariable = (this.firstVariable * 10) - tag ;
               } else {
                   this.firstVariable = (this.firstVariable * 10) + tag ;
               }
               this.setValue(this.resultWindowName,this.firstVariable);
           }
       };

       /**
        * function sets operator type
        * @param command Pressed button's id
        */
       this.setOperation = function(command) {
           switch(command) {
               case 'plus':
                   this.operant = '+';
                   this.isFirstOperatorNegative = false;
                   break;
               case 'minus':
                   this.operant = '-';
                   break;
               case 'divide':
                   this.operant = '/';
                   this.isFirstOperatorNegative = false;
                   break;
               case 'multiply':
                   this.operant = '*';
                   this.isFirstOperatorNegative = false;
                   break;
           }
       };

       /**
        * called when operation button is clicked
        * @param operation Pressed button's id
        */
       this.operationClick = function(operation){
           this.isOneTimeClicked = false;
           this.setOperation(operation);

           if (!this.isOperatorClicked && this.operant != null) {
               this.preEqualSettings();
               this.calculate(this.operantPrev);
               this.isOperatorClicked = true;
               this.operantPrev = this.operant;
           } else {
               this.operantPrev = this.operant;
               this.releaseValue(this.resultWindowName);
           }

          this.setValue(this.operantWindowName, this.operant);
       };

       /**
        * called when Clear button is clicked, releases all variables, clears display windows
        */
       this.clearButtonClick = function() {
           this.releaseValue(this.resultWindowName);
           this.releaseValue(this.operantWindowName);
           this.isFirstOperatorNegative = false;
           this.isResultNull = true;
           this.result = null;
           this.operant = null;
           this.isOperatorClicked = false;
           this.secondVariable = null;
           this.firstVariable = null;
           this.operantPrev = null;
       };

       /**
        * main function to calculate variables
        * @param operant Kind of operation
        */
       this.calculate = function(operant){
           var result;
           switch(operant) {
               case '+':
                   result = this.result =  this.firstVariable + this.secondVariable;
                   this.setValue(this.resultWindowName, result);
                   this.isResultNull = false;
                   break;
               case '-':
                   result = this.result = this.firstVariable - this.secondVariable;
                   this.setValue(this.resultWindowName, result);
                   this.isResultNull = false;
                   break;
               case '/':

                   if ( this.secondVariable != 0) {
                       result = this.result = this.firstVariable / this.secondVariable;
                       this.setValue(this.resultWindowName, result);
                       this.isResultNull = false;
                   } else {
                       this.setValue(this.resultWindowName, "Error");
                       this.result = 0;
                   }

                   break;
               case '*':
                   result = this.result = this.firstVariable * this.secondVariable;
                   this.setValue(this.resultWindowName, result);
                   this.isResultNull = false;
                   break;
           }
       };
   }


