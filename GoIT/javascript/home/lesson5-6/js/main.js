window.onload = function() {
    timer.init();
};

var Timer = function() {
    
    var hoursTimezone = new Date(0).getHours();
    
    this.stops = 0;
    this.splits = 0;
    
    
    this.init = function() {
        document.getElementById('start').onclick = this.start;
        document.getElementById('split').onclick = this.split;
        document.getElementById('reset').onclick = this.reset;
    };
    
    this.getHours = function() {
        return parseInt(document.getElementById('hours').innerHTML);
    };
    
    this.getMinutes = function() {
        return parseInt(document.getElementById('minutes').innerHTML);
    };
    
    this.getSeconds = function() {
        return parseInt(document.getElementById('seconds').innerHTML);
    };
    
    this.getMilliseconds = function() {
        return parseInt(document.getElementById('milliseconds').innerHTML);
    };
    
    this.formatted = function(num, length) {
        return ('00'.substring(0, length - 1) + num).substr(String(num).length - 1);
    };
    
    this.setTimer = function(time) {
        var date = new Date(time);
        var hours = this.formatted(date.getHours() - hoursTimezone, 2) + ':';
        var minutes = this.formatted(date.getMinutes(), 2) + ':';
        var seconds = this.formatted(date.getSeconds(), 2) + '.';
        var milliseconds = this.formatted(date.getMilliseconds(), 3);
            
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
        document.getElementById('milliseconds').innerHTML = milliseconds;
    };
    
    this.getTime = function () {
        return new Date(this.getMilliseconds() + this.getSeconds() * 1000
        + this.getMinutes() * 1000 * 60 + this.getHours() * 1000 * 60 * 60).getTime();
    }
    
    this.start = function() {
        document.getElementById('start').innerHTML = 'Stop';
        document.getElementById('start').onclick = timer.stop;
        timer.lastTimeStop = new Date().getTime();  
        timer.timer = window.setInterval(function() {
            var newTimeStop = new Date().getTime();
            var toAdd = newTimeStop - timer.lastTimeStop;
            var newTime = timer.getTime() + toAdd;
            timer.setTimer(newTime);
            timer.lastTimeStop = newTimeStop;
        }, 1);
    };
    
    this.stop = function() {
        document.getElementById('start').onclick = timer.start;
        document.getElementById('start').innerHTML = 'Start';
        window.clearInterval(timer.timer);
        timer.addInfo ('stop');
    };
    
    this.reset = function() {
        timer.stop();
        timer.setTimer(0);
        timer.clearInfo(0);
    };
    
    this.split = function() {
        if (document.getElementById('start').innerHTML == 'Stop') {
            timer.addInfo('split');
        }
    };
    
    this.addInfo = function(field) {
        var info = field+' '+ (++this[field + 's']) +': ' +this.formatted(this.getHours(), 2)
            +':'+this.formatted(this.getMinutes(), 2) +':' +this.formatted(this.getSeconds(), 2)
            +'.'+this.formatted(this.getMilliseconds(), 3);
        
        var p = document.createElement('p');    
        p.innerHTML = info;
        document.querySelector('.info').appendChild(p);
    };
    
    this.clearInfo = function() {
        var info = document.querySelectorAll('.info p');
        for (var i = 0; i < info.length; i++) {
            info[i].remove();
            // info(i).parentNode.removeChild(info[i]); //IE 11.0-
        } 
        this.stops = 0;
        this.splits = 0;
    };
    
};

var timer = new Timer();
    
