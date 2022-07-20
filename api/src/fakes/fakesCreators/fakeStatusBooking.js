import {faker} from '@faker-js/faker';
import fs from 'fs';
let statusBooking=[]

function generateStatusBooking() {
	for(let id=1; id<=100; id++) {
        const id_status = faker.datatype.uuid()
		const description = faker.name.firstName()
		statusBooking.push({
			id_status:id_status,
			description:description

		})
	}

	return {data: statusBooking}
}	

const generatedData = generateStatusBooking()
console.log(generatedData)

fs.writeFileSync('api/src/fakes/fakesJsons/Status_Booking.json', JSON.stringify(generatedData, null, "\t"))