import {faker} from '@faker-js/faker';
import fs from 'fs';
let booking=[]

function generateBooking() {
	for(let id=1; id<=100; id++) {
        const nro_booking = faker.datatype.number({ min: 1, max: 100000})
        const id_status = faker.datatype.uuid()
        const id_package = faker.datatype.uuid()
        const numberPeople = faker.datatype.number({ min: 20, max: 100})
        const datatime = faker.date.future() 
		const nro_user = faker.datatype.number()
        const amount = faker.commerce.price()
		booking.push({
            nro_booking:nro_booking,
            id_status:id_status,
            id_package:id_package,
            numberPeople:numberPeople,
            datatime:datatime,
            nro_user:nro_user,
            amount:amount
		})
	}

	return {data: booking}
}	

const generatedData = generateBooking()
console.log(generatedData)

fs.writeFileSync('api/src/fakes/fakesJsons/Booking.json', JSON.stringify(generatedData, null, "\t"))