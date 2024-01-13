let convertTemperature = (temperature, unit) => {
    if(unit === "C"){
        let c = (temperature * 9/5) + 32;
        return c;
    }else if(unit === "F"){
        let f = (temperature - 32) * 5/9;
        return f;
    }else{
        let err = "Vui lòng điền C hoặc F !!!";
        return err;
    }
}
console.log(convertTemperature(30, "C"))