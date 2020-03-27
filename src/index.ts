import { interpret } from 'xstate'
import { prompt } from 'inquirer'

import { SimpleMachine } from './machines/simple'

const service = interpret(SimpleMachine)
service.start()
service.onChange(() => {
	if (service.state.matches('exit')) {
		service.stop()
	} else {
		runInput()
	}
})
service.onStop(() => {
	return 1
})

async function runInput() {
	const answers = await prompt([
		{
			type: 'list',
			name: 'command',
			message: '',
			choices: [...service.state.nextEvents],
			filter: selection => selection
		}
	])
	service.send(answers.command)
}

runInput()
