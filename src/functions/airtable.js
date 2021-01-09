import Airtable from 'airtable';
const API = "keyodHChRtdsRn0ll"

var base = new Airtable({ apiKey: API }).base('appOkqvc8Q4DmChpG');

export function getUserData() {
    const data = [];

    return new Promise((resolve, reject) => {

        base('Data').select({
            maxRecords: 100,
            view: "Grid view"
        }).eachPage(function page(records, fetchNextPage) {

            records.forEach(function (record) {
                const name = record.get('Name');
                const email = record.get('Email');
                const phone = record.get('Phone');
                data.push({ name, email, phone })
                console.log(data)
            });

            fetchNextPage();
            resolve(data);
        }, function done(err) {
            if (err) { console.error(err); }
        });
    })
}
export const saveUserData = ({ name, email, phone }) => {
    base('Data').create([
        {
            "fields": {
                "Name": name,
                "Email": email,
                "Phone": phone
            }
        },
    ], function (err, records) {
        if (err) {
            console.error(err);
            return;
        }
        records.forEach(function (record) {
            console.log(record.getId());
        });
    });
}
