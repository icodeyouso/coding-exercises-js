"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ifmachine = function () {
    function Ifmachine() {
        _classCallCheck(this, Ifmachine);

        this.state = "CLOSED", this.timeOutid = undefined;
    }

    _createClass(Ifmachine, [{
        key: "remoteClicked",
        value: function remoteClicked() {
            console.log("me");
        }
    }]);

    return Ifmachine;
}();

exports.default = Ifmachine;

var myMachine = new Ifmachine();
console.log(myMachine.state);
myMachine.remoteClicked();

// var ifmachine = ({
//     initial: "closed",
//     events: [
//         { name: "click1", from: "closed", to: "open" },
//         { name: "closing", from: "open", to: "open" },
//         { name: "stoppedwhileclosing", from: "closing", to: "stoppedwhileclosing" },
//         { name: "stoppedwhileclosing", from: "stoppedwhileclosing", to: "stoppedwhileopening" },
//         { name: "opening", from: "opening", to: "closing" },
//         { name: "stoppedwhileopening", from: "stoppedwhileopening", to: "closed" },
//         { name: "closing" },
//         { name: "closed" }

//     ]
// })

// callbacks: {
//     closedToOpen: function(opening, )
// }