function calculateArea(){
    return this.width * this.height;
}

const triangle = {width:20, height:30};

const area = calculateArea.bind(triangle);

console.log(area())