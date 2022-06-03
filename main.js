console.log(customers)

const customerList = document.querySelector('#customer-list')

// Make words a title case
function titleCase(words) {
    return words.charAt(0).toUpperCase() + words.substr(1).toLowerCase()
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


    let emailElement = document.createElement('h2')
    emailElement.classList.add("5", "f4-ns", "mv0")
    emailElement.innerText = `${customer.email}`
    customerElement.appendChild(emailElement)


    // customerList.appendChild(emailElement)
    // // customerList.appendChild(customerElement)

    // let locationElement = document.createElement('h1')
    // locationElement.classList.add("5", "f4-ns", "mv0")
    // locationElement.innerText = `Location: ${customer.location.street.number} ${customer.location.street.name} ${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`
    // contentElement.appendChild(locationElement)

    // customerList.appendChild(locationElement)
    // // customerList.appendChild(customerElement)

    // let dobElement = document.createElement('h1')
    // dobElement.classList.add("5", "f4-ns", "mv0")
    // let birthday = moment(customer.dob.date).format('MMM DD, YYYY')
    // dobElement.innerText = `DOB: ${birthday}`
    // contentElement.appendChild(dobElement)

    // customerList.appendChild(dobElement)
    // // customerList.appendChild(customerElement)

    // let registeredElement = document.createElement('h1')
    // registeredElement.classList.add("5", "f4-ns", "mv0")
    // let registerDate = moment(customer.registered.date).format('MMM DD, YYYY')
    // registeredElement.innerText = `Customer since: ${registerDate}`
    // contentElement.appendChild(registeredElement)

    // customerList.appendChild(registeredElement)
    
    
    
    
    customerList.appendChild(customerElement)


}