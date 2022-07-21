import {faker} from '@faker-js/faker';
import fs from 'fs';
let TypeUser=[]

function generateTypeUser() {
	for(let id=1; id<=100; id++) {
        const id_type_user = faker.datatype.uuid()
		const description = faker.lorem.lines()
		TypeUser.push({
			id_type_user:id_type_user,
			description:description

		})
	}

	return {data: TypeUser}
}	

const generatedData = generateTypeUser()
console.log(generatedData)

fs.writeFileSync('api/src/fakes/fakesJsons/TypeUser.json', JSON.stringify(generatedData, null, "\t"))