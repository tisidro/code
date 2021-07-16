let alice = {
    name: 'Alice Abrams',
    age: 36,
    married: false,
    homeAddress: {
        street: '12 Maple St.',
        city: 'Burlington',
        state: 'VT',
        zipCode: '05401',
        location: {
            latitude: 44.4759,
            longitude: -73.2121
        }
    },
    pets: ['Mittens', 'Fido']
}

console.log(alice.homeAddress.location.latitude)