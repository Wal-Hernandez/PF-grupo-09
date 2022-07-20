import {faker} from '@faker-js/faker';
import fs from 'fs';
let hotels=[]


function generateHotels() {
	for(let id=1; id<=100; id++) {
		const id_hotel = faker.datatype.uuid()
		const name = faker.commerce.department()
		const location = faker.word.interjection(100)
		const stars = faker.datatype.number({ min: 1, max: 5})
		const phone = faker.phone.phoneNumber()
		const id_city=faker.datatype.uuid()
		const price=faker.commerce.price()
		const pool = faker.datatype.boolean()
		const wifi = faker.datatype.boolean()
		const gym = faker.datatype.boolean()
		const image=faker.image.business()
		hotels.push({
			id_hotel:id_hotel,
			name:name,
			location:location,
			stars:stars,
			phone:phone,
			id_city:id_city,
			price:price,
			pool:pool,
			wifi:wifi,
			gym:gym,
			image:image
		})
	}
	return {data: hotels}
}	

const generatedData = generateHotels()
console.log(generatedData)

fs.writeFileSync('api/src/fakes/fakesJsons/Hotel.json', JSON.stringify(generatedData, null, "\t"))