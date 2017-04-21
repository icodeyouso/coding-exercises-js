export default class Ifmachine {
    constructor() {
        this.state = "CLOSED",
            this.timeOutid = undefined

    }
    remoteClicked() {

    }
}
const myMachine = new Ifmachine()
console.log(myMachine.state)
myMachine.remoteClicked()



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