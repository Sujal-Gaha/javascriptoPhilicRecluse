/* error handling in JavaScript */
function functionName() {
    //  try catch block
    try {
        //  code block that may throw errors
    } catch (e) {
        //  catch error
        console.log(e); //  console logs the error without crashing the server or program
        throw new Error("Error has been caught");   //  throws new error
    }
}
functionName();