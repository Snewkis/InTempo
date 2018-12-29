let forLoopList = forLoop(2, (item, i) => { return `
	<li>Item ${i}</li>
`})

let users = [
	{
		name: "John Doe",
		age: 21
	},
	{
		name: "John Die",
		age: 22
	}
]

let eachArray = each(users, (item, i) => { return `
	<li>User ${i} : name - ${item.name}, age - ${item.age}</li>
`});

insert(forLoopList, "#forLoopId");
insert(eachArray, "#eachId");