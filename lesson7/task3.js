function divide(numerator, denominator) {
    if (denominator === 0 ) {
        throw new Error("Can't devide by 0");
    } else if ((typeof numerator !== 'number') || (typeof denominator !== 'number') ) {
        throw new Error("Both arguments must be numbers");
    }
    return (numerator/denominator);
}

try {
    console.log(divide(10, 2));    
} catch (error) {
    console.log(error.message);        
} finally {
    console.log('Job is done');  
    }

try {
    console.log(divide(5, 0));    
} catch (error) {
    console.log(error.message);        
} finally {
    console.log('Job is done');  
    }

try {
    console.log(divide(`number`, 2));    
} catch (error) {
    console.log(error.message);        
} finally {
    console.log('Job is done');  
    }