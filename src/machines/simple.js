"use strict";
exports.__esModule = true;
var xstate_1 = require("xstate");
exports.SimpleMachine = xstate_1.Machine({
    id: 'simple',
    initial: 'start',
    states: {
        start: {
            on: {
                GO_LEFT: 'left',
                GO_RIGHT: 'right',
                GO_UP: 'up',
                GO_DOWN: 'down'
            }
        },
        left: {
            on: {
                GO_RIGHT: 'start'
            }
        },
        right: {
            on: {
                GO_LEFT: 'start'
            }
        },
        up: {
            on: {
                GO_DOWN: 'start',
                GO_HIGHER: 'higher'
            }
        },
        down: {
            on: {
                GO_UP: 'start'
            }
        },
        higher: {
            on: {
                GO_DOWN: 'up',
                EXIT: 'exit'
            }
        },
        exit: {
            type: 'final'
        }
    }
}, {
    actions: {
        sayHi: function () { return console.log('elo'); },
        sayStep: function () { return console.log('step'); },
        sayGoodbye: function () { return console.log('cya'); }
    }
});
