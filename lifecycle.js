import http from 'k6/http';
import { check } from "k6"; //check apakah hasilnya sudah expected

// untuk performance test
export let options = {
    stages: [
        { duration: '1m', target: 20 },
        { duration: '1m', target: 10 },
        { duration: '10s', target: 0 },
    ]
};

//check apakah hasil API sudah expected atau belum
export default function () {
    let res = http.get('https://jsonplaceholder.typicode.com/todos/1');
	let data = res.json();

	let title = data['title'];
	let completed = data['completed'];

	check(res, {
		'is 200': (r) => r.status === 200,
		'is titleCorrect': (r) => title === "delectus aut autem",
		'is completed': (r) => completed === true,

	});
}