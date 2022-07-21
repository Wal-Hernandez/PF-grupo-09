import {faker} from '@faker-js/faker';
import fs from 'fs';
let activity=[]

function generateActivity() {
	for(let id=1; id<=100; id++) {
        const id_activity = faker.datatype.uuid()
		const name = faker.word.verb()
		const description = faker.lorem.lines()
		const id_city = faker.datatype.uuid()
		const price = faker.commerce.price()
		activity.push({
            id_activity:id_activity,
			name:name,
			description:description,
			id_city:id_city,
			price:price
		})
	}

	return {data: activity}
}	


const generatedData = generateActivity()
console.log(generatedData)

fs.writeFileSync('api/src/fakes/fakesJsons/Activity.json', JSON.stringify(generatedData, null, "\t"))