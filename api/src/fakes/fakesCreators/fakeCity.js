import {faker} from '@faker-js/faker';
import fs from 'fs';
let city=[]

function generateCity() {
	for(let id=1; id<=100; id++) {
        const id_city = faker.datatype.uuid()
		const description = faker.lorem.text()
		const location = faker.address.city()
		city.push({
            id_city:id_city,
			description:description,
			location:location
		})
	}
	return {data: city}
}	

const generatedData = generateCity()
console.log(generatedData)

fs.writeFileSync('api/src/fakes/fakesJsons/City.json', JSON.stringify(generatedData, null, "\t"))