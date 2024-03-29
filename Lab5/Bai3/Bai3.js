class Clock {
    constructor(template, timer) {
        this.template = template
        this.timer = timer
    }


    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {

        clearInterval(this.timer);
        console.log(this.timer)
    };
    start() {
        this.render();

        this.timer = setInterval(this.render, 1000);
        console.log(this.timer)
    };

}

let clock = new Clock('h:m:s');
clock.start();
clock.stop();