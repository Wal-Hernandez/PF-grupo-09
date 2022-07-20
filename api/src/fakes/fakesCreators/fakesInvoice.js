import {faker} from '@faker-js/faker';
import fs from 'fs';
let invoices=[]

function generateInvoices() {
	for(let id=1; id<=100; id++) {
        const nro_invoice = faker.datatype.number({ min: 1, max: 100000})
		const datetime=faker.date.past()
        const nro_booking = faker.datatype.number({ min: 1, max: 100000})
		const confirmation = faker.datatype.boolean()
		invoices.push({
            nro_invoice:nro_invoice,
			datetime: datetime,
			nro_booking: nro_booking,
			confirmation:confirmation,
		})
	}

	return {data: invoices}
}	



const generatedData = generateInvoices()
console.log(generatedData)

fs.writeFileSync('api/src/fakes/fakesJsons/invoices.json', JSON.stringify(generatedData, null, "\t"))