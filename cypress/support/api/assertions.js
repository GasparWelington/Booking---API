class Assertions {

    showdHaveStatus(response, status) {
        expect(response.status, 'Valida o Status').to.eq(status)

    }

    validarContratoOf(response, schema) {
        return cy.wrap(response.body).should(
            schema


        )
    }

    validarBookingIdNull(response) {
        expect(response.body.booking, 'bookingId exists').to.not.be.null;

    }

    validarHeader(response) {
        expect(response.headers, 'Validar headers').to.include({
            server: 'Cowboy',
            connection: 'keep-alive',
            'x-powered-by': 'Express'
        })
    }

    validarAplicacao(response) {
        expect(response.headers).to.include({
            'content-type': 'application/json; charset=utf-8'
        })
    }

    validarDuracao(response) {
        expect(response.duration, 'Valida tempo de retorno da aplicação').lessThan(900);

    }

}

export default new Assertions();