import { Machine } from 'xstate'

export const SimpleMachine = Machine(
	{
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
	},
	{
		actions: {
			sayHi: () => console.log('elo'),
			sayStep: () => console.log('step'),
			sayGoodbye: () => console.log('cya')
		}
	}
)
