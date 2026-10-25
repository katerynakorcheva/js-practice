//function declaration
function areaRectangle1(width, height) {
    let result = width*height;
    return result;
}

console.log(areaRectangle1(5, 10)); 


// function expression
const areaRectangle2 = function(width,height) {
    let result = width*height;
    return result;
}
console.log(areaRectangle2(5, 10));

//Arrow function

const areaRectangle3 = (width,height) => width*height

console.log(areaRectangle3(5, 10));