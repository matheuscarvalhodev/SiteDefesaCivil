import { Table } from "reactstrap";

export function TableRelatorio(props) {
	let i = 0;
	const table = [];
	const filter = props.filters;

	const filterTableLines = () => {
		Object.keys(props.table.oc).forEach((key) => {
			const line = props.table.oc[key];
			const temp = [];
			let lineN = false;

			Object.keys(filter).forEach((key) => {
				if (filter[key] === "")
					i++;
			})
			if (i === 4)
				table.push(line);
			Object.keys(filter).forEach((key) => {
				if (filter[key]) {
					const hasSome = line.some(
						(item) =>
							String(item).toLowerCase().trim() ===
							filter[key].toLowerCase().trim()
					);

					if (hasSome) {
						if (!existOc(temp, line) && !lineN) {
							temp.push(line);
						}
					} else if (filter[key] !== "") {
						temp.splice(0, 1);
						lineN = true;
					}
				}
			});
			if (!lineN && temp.length > 0)
				table.push(line);
			i = 0;
		});
		return table;
	};

	function existOc(table, line) {
		let exist = false;
		table.map((item, index) => {
			if (table[index] == line) {
				exist = true;
			}
		})
		return (exist);
	}

	return (
		<Table striped responsive>
			<thead>
				<tr>
					{props.table.titles.map((item, index) => {
						return <th>{item}</th>;
					})}
				</tr>
			</thead>

			<tbody>
				{filterTableLines().map((item) => (
					<tr>
						{item.map((item2) => (
							<td>{item2}</td>
						))}
					</tr>
				))}
			</tbody>
		</Table>
	);
}