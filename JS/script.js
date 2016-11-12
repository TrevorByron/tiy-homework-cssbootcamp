$(function() {
    Mist.init();
});

var Mist = {
    init: function() {
        this.blinking();
    },
    blinking: function() {
        $(".typed").typed({
            strings: ["Learn to code. Take charge of your career."],
            typeSpeed: 100,
            backSpeed: 70,
            backDelay: 700,
            loop: true,
            cursorChar: "| "
        });
    }
}
