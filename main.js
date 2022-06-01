console.log(customers)

const customerList = document.querySelector('#customer-list')

for (let customer of customers) {
    let customerElement = document.createElement('div')
    customerElement.classList.add('customer')
    
    let contentElement = document.createElement('article')
    contentElement.classList.add("br2", "ba", "dark-gray", "b--black-10", "mv4", "w-100", "w-50-m", "w-25-l", "mw5", "center")




    let imageElement = document.createElement('img')
    imageElement.src = customer.picture.large
    imageElement.alt = 'image of customer'
    // imageElement.classList.add("db", "w-100", "br2", "br--top")
    contentElement.appendChild(imageElement)
    customerList.appendChild(imageElement)
    // customerElement.appendChild(contentElement)


    let infoElement = document.createElement('div')
    infoElement.classList.add("pa2", "ph3-ns", "pb3-ns")

    
    let nameElement = document.createElement('h1')
    nameElement.classList.add("5", "f4-ns", "mv0")
    nameElement.innerText = `Name: ${customer.name.first} ${customer.name.last}`
    contentElement.appendChild(nameElement)
    
    customerList.appendChild(nameElement)
    // customerList.appendChild(customerElement)

    let emailElement = document.createElement('h1')
    emailElement.classList.add("5", "f4-ns", "mv0")
    emailElement.innerText = `Email: ${customer.email}`
    contentElement.appendChild(emailElement)

    customerList.appendChild(emailElement)
    // customerList.appendChild(customerElement)

    let locationElement = document.createElement('h1')
    locationElement.classList.add("5", "f4-ns", "mv0")
    locationElement.innerText = `Location: ${customer.location.street.number} ${customer.location.street.name} ${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`
    contentElement.appendChild(locationElement)

    customerList.appendChild(locationElement)
    // customerList.appendChild(customerElement)

    let dobElement = document.createElement('h1')
    dobElement.classList.add("5", "f4-ns", "mv0")
    let birthday = moment(customer.dob.date).format('MMM Do, YYYY')
    dobElement.innerText = `DOB: ${birthday}`
    contentElement.appendChild(dobElement)

    customerList.appendChild(dobElement)
    // customerList.appendChild(customerElement)

    let registeredElement = document.createElement('h1')
    registeredElement.classList.add("5", "f4-ns", "mv0")
    registeredElement.innerText = `Customer since: ${customer.registered.date}`
    contentElement.appendChild(registeredElement)

    customerList.appendChild(registeredElement)
    // customerList.appendChild(customerElement)


}