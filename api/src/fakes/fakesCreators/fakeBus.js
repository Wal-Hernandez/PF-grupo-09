import {faker} from '@faker-js/faker';
import fs from 'fs';
let bus=[]

function generateBus() {
	for(let id=1; id<=100; id++) {
		const nro_bus = faker.datatype.number({ min: 1, max: 500})
		const patent = faker.datatype.hexadecimal(6)
		const seating = faker.datatype.number({ min: 20, max: 50})
		const brand = faker.vehicle.manufacturer()
		bus.push({
            nro_bus:nro_bus,
			patent:patent,
			seating:seating,
			brand:brand
		})
	}

	return {data: bus}
}	


const generatedData = generateBus()
console.log(generatedData)

fs.writeFileSync('api/src/fakes/fakesJsons/Bus.json', JSON.stringify(generatedData, null, "\t"))