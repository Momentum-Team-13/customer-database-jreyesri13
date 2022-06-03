console.log(customers)

const customerList = document.querySelector('#customer-list')


// Make words a title case
function titleCase(words) {
    return words.charAt(0).toUpperCase() + words.substr(1).toLowerCase()
}


// State name to abbreviation
function stateNameToAbbr(stateName) {
    const idx = usStates.findIndex(function (state) {
        return state.name === stateName.toUpperCase()
    })

    if (idx === -1) {
        return null
    }

    return usStates[idx].abbreviation
}


for (let customer of customers) {
    let customerElement = document.createElement('div')
    customerElement.classList.add('customer')

    // Add the images
    let imageElement = document.createElement('img')
    imageElement.src = customer.picture.large
    imageElement.alt = 'image of customer'
    customerElement.appendChild(imageElement)

    // Add the names
    let nameElement = document.createElement('h1')
    nameElement.classList.add("5", "f4-ns", "mv0")
    let firstName = titleCase(customer.name.first)
    let lastName = titleCase(customer.name.last)
    nameElement.innerText = `${firstName} ${lastName}`
    customerElement.appendChild(nameElement)


    // Add the email
    let emailElement = document.createElement('h2')
    emailElement.classList.add("5", "f4-ns", "mv0")
    emailElement.innerText = `${customer.email}`
    customerElement.appendChild(emailElement)


    // Add the location (part 1)
    let locationElement1 = document.createElement('h2')
    locationElement1.classList.add("5", "f4-ns", "mv0")
    locationElement1.innerText = `${customer.location.street.number} ${customer.location.street.name},`
    customerElement.appendChild(locationElement1)


    // Add the location (part 2)
    let locationElement2 = document.createElement('h2')
    locationElement2.classList.add("5", "f4-ns", "mv0")
    let stateAbbr = stateNameToAbbr(customer.location.state)
    locationElement2.innerText = `${customer.location.city}, ${stateAbbr} ${customer.location.postcode}`
    customerElement.appendChild(locationElement2)


    // Add the birthday
    let dobElement = document.createElement('h2')
    dobElement.classList.add("5", "f4-ns", "mv0")
    let birthday = moment(customer.dob.date).format('MMM DD, YYYY')
    dobElement.innerText = `DOB: ${birthday}`
    customerElement.appendChild(dobElement)


    // Add the registered date
    let registeredElement = document.createElement('h1')
    registeredElement.classList.add("5", "f4-ns", "mv0")
    let registerDate = moment(customer.registered.date).format('MMM DD, YYYY')
    registeredElement.innerText = `Customer since: ${registerDate}`
    customerElement.appendChild(registeredElement)


    customerList.appendChild(customerElement)
}