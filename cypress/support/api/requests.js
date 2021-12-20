class Requests {
  getPing() {
    return cy.request({
      method: 'GET',
      url: 'ping',
    })

  }

  getBooking() {
    return cy.request({
      method: 'GET',
      url: 'booking/2'
    })
  }

  postBooking() {
    return cy.request({
      method: 'POST',
      url: 'booking',
      body: {
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
          "checkin": "2020-01-01",
          "checkout": "2020-01-02"
        },
        "additionalneeds": "Breakfast"
      }
    })

  }
  updadeBookingToken(response) {
    const id = response.body.bookingid

    return cy.request({
      method: 'PUT',
      url: `booking/${id}`,
      body: {
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
          "checkin": "2020-01-01",
          "checkout": "2020-01-02"
        },
        "additionalneeds": "ola"
      },
      failOnStatusCode: false
    })
  }

  /// começa aqui 

  updadeBooking(response) {
    const id = response.body.bookingid

    return cy.request({
      method: 'PUT',
      url: `booking/${id}`,
      headers: {
        Cookie: `token=${Cypress.env('token')}`
      },
      body: {
        "firstname": "Jim",
        "lastname": "James",
        "totalprice": 111,
        "depositpaid": false,
        "bookingdates": {
          "checkin": "2020-01-01",
          "checkout": "2020-01-02"
        },
        "additionalneeds": "Lunch"
      },
      failOnStatusCode: false
    })
  }


  /// aqui 

  postAuth() {
    return cy.request({
      method: 'POST',
      url: 'auth',
      body: {
        "username": "admin",
        "password": "password123"
      }
    })
  }
  // aqui 

  doAuth() {
    this.postAuth().then(authResponse => {
      const token = authResponse.body.token;
      Cypress.env('token', token);
    })
  }
  //  aqui 

  deleteBooking(response) {
    const id = response.body.bookingid

    return cy.request({
      method: 'DELETE',
      url: `booking/${id}`,
      headers: {
        Cookie: `token=${Cypress.env('token')}`

      },

      failOnStatusCode: false
    })
  }

  updadeBookingInexistente(response) {
    const id = response.body.bookingid[55]

    return cy.request({
      method: 'PUT',
      url: `booking/${id}`,
      headers: {
        Cookie: `token=${Cypress.env('token')}`


      },
      body: {
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
          "checkin": "2020-01-01",
          "checkout": "2020-01-02"
        },
        "additionalneeds": "ola"
      },
      failOnStatusCode: false
    })
  }

  updadeTokenInvalido(response) {
    const id = response.body.bookingid

    return cy.request({
      method: 'PUT',
      url: `booking/${id}`,
      body: {
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
          "checkin": "2020-01-01",
          "checkout": "2020-01-02"
        },
        "additionalneeds": "ola"
      },
      failOnStatusCode: false
    })
  }

  deleteReservaSemToken(response) {
    const id = response.body.bookingid

    return cy.request({
      method: 'DELETE',
      url: `booking/${id}`,
      body: {
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
          "checkin": "2020-01-01",
          "checkout": "2020-01-02"
        },
        "additionalneeds": "ola"
      },
      failOnStatusCode: false
    })
  }

  deleteReservaTokenInvalido(response) {
    const id = response.body.bookingid

    return cy.request({
      method: 'DELETE',
      url: `booking/${id}`,
      body: {
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
          "checkin": "2020-01-01",
          "checkout": "2020-01-02"
        },
        "additionalneeds": "ola"
      },
      failOnStatusCode: false
    })
  }

  deleteBookingInexistente(response) {
    const id = response.body.bookingid[51]

    return cy.request({
      method: 'DELETE',
      url: `booking/${id}`,
      headers: {
        Cookie: `token=${Cypress.env('token')}`
      },
      failOnStatusCode: false
    });
  }

}



export default new Requests();