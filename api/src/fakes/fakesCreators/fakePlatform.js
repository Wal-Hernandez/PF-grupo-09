import {faker} from '@faker-js/faker';
import fs from 'fs';
let platform=[]

function generatePlatform() {
	for(let id=1; id<=100; id++) {
        const id_platform = faker.datatype.uuid()
		const terminal = faker.lorem.word()
        const address = faker.address.secondaryAddress()
		const location = faker.address.county()
		platform.push({
            id_platform:id_platform,
			terminal:terminal,
			address:address,
            location:location
		})
	}

	return {data: platform}
}	


const generatedData = generatePlatform()
console.log(generatedData)

fs.writeFileSync('api/src/fakes/fakesJsons/Platform.json', JSON.stringify(generatedData, null, "\t"))