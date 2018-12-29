let forLoopList = forLoop(2, (item, i) => { return `
	<li>Item ${i}</li>
`})

insert(forLoopList, "#forLoopId");