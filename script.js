// A Promise is in one of these states:
// 1- pending: initial state, neither fulfilled nor rejected.
// 2- fulfilled: meaning that the operation was completed successfully.
// 3- rejected: meaning that the operation failed.

// This is a function that we give to our Promise when we are constructing it.
// It receives two parameters:
// 1st parameter: A function that changes the status of the Promise from 'pending' to 'fulfilled'; we'll call this parameter 'resolveFunction' 
// 2nd parameter: A function that changes the status of the Promise from 'pending' to 'rejected'; we'll call this parameter 'rejectFunction'
function functionToResolveOrRejectPromise(resolveFunction, rejectFunction){
    
    function functionToBeCalledAfter2Seconds(){
        var harryHasASpine = true;
        if (harryHasASpine) {
            resolveFunction("Harry will leave Meghan for me. Swoooon.");
        } else {
            rejectFunction("Harry's a little whiner. Under the thumb he is. He won't be leaving anybody anytime soon.");
        }    
    }
    // Here we set up a timer that will expire after 2 seconds.
    // When it expires, it will invoke the callback function
    // 'functionToBeCalledAfter2Seconds'. This function will
    // in turn invoke the 'resolveFunction' which will change
    // the status of our promise from 'pending' to 'fulfilled'
    setTimeout(functionToBeCalledAfter2Seconds,2000);
}

// Create a new Promise object
var harrysPromiseToLeaveMeghan = new Promise(functionToResolveOrRejectPromise);

function functionToBeCalledWhenThePromiseIsFulfilled (harrysDecision) {
    console.log("Harry has made the right decision... ", harrysDecision);
}

function functionToBeCalledWhenThePromiseIsRejected (harrysDecision) {
    console.log("Harry sucks! ", harrysDecision);
}

// If we want to do something when the Promise changes status then we can invoke the 'then' method on the promise object and pass it two callback functions:
// 1st parameter: A function that is invoked when the Promise is fulfilled
// 2nd parameter: A function that is invoked when the Promise is rejected
harrysPromiseToLeaveMeghan.then(functionToBeCalledWhenThePromiseIsFulfilled, functionToBeCalledWhenThePromiseIsRejected);
