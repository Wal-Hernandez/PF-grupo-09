import {faker} from '@faker-js/faker';
import fs from 'fs';
let packages=[]


function generatePackage() {
	for(let id=1; id<=100; id++) {
		const id_package = faker.datatype.uuid()
		const name = faker.commerce.department()
		const start_date = faker.date.future() 
		const end_date = faker.date.future() 
		const id_platform = faker.datatype.uuid()
		const price=faker.commerce.price()
        const id_activity=faker.datatype.uuid()
		const ability = faker.word.verb()
		const discount = faker.datatype.boolean()
		const id_city = faker.datatype.uuid()
		const nro_bus = faker.datatype.number({ min: 1, max: 500})
		const id_hotel=faker.datatype.uuid()
		packages.push({
			id_package:id_package,
			name:name,
			start_date:start_date,
			end_date:end_date,
			id_platform:id_platform,
			id_city:id_city,
			price:price,
			id_activity:id_activity,
			ability:ability,
			discount:discount,
			nro_bus:nro_bus,
            id_hotel:id_hotel
		})
	}
	return {data: packages}
}	


const generatedData = generatePackage()
console.log(generatedData)

fs.writeFileSync('api/src/fakes/fakesJsons/Package.json', JSON.stringify(generatedData, null, "\t"))