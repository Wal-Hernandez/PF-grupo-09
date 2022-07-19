import {faker} from '@faker-js/faker';
import fs from 'fs';
let users=[]

function generateUsers() {
	for(let id=1; id<=100; id++) {
		const name=faker.name.firstName()
		const surname=faker.name.lastName()
		const mail = faker.internet.email();
		const nro_user = faker.datatype.number()
		const password = faker.datatype.string()
		const id_type_user = faker.datatype.string()
		users.push({
			nro_user:nro_user,
			name: name,
			surname: surname,
			mail:mail,
			password:password,
			id_type_user:id_type_user
		})
	}

	return {data: users}
}	

const generatedData = generateUsers()
console.log(generatedData)

fs.writeFileSync('api/src/fakes/fakesJsons/users.json', JSON.stringify(generatedData, null, "\t"))