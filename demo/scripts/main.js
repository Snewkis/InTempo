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

let testIf = 3;

let testTrue = ifState(testIf == 3, `TRUE ${testIf} = 3`, `FALSE ${testIf} ≠ 3`);
let testFalse = ifState(testIf == 2, `TRUE ${testIf} = 2`, `FALSE ${testIf} ≠ 2`);

insert(forLoopList, "#forLoopId");
insert(eachArray, "#eachId");

insert(testTrue, "#trueTest");
insert(testFalse, "#falseTest");
