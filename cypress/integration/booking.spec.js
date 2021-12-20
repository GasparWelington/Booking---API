/// <reference types="cypress"/>

import spok from 'cy-spok'
import reg from '../support/api/requests'
import schemas from '../support/api/schemas'
import assertions from '../support/api/assertions'

describe('Booking', () => {
    before(() => {
        reg.doAuth()
    });
    it('Validar o contrato do GET booking', () => {
        reg.getBooking().then(getBookingResponse => {
            assertions.validarContratoOf(getBookingResponse, schemas.getBookingSchema())
        })
    });
    it('Criar reserva com sucesso (200)', () => {
        reg.postBooking().then(postBookingResponse => {
            assertions.showdHaveStatus(postBookingResponse, 200)
            assertions.validarBookingIdNull(postBookingResponse)
            assertions.validarHeader(postBookingResponse)
            assertions.validarAplicacao(postBookingResponse)
            assertions.validarDuracao(postBookingResponse)
        })
    })

    it('Tentar alterar uma reserva sem token (403)', () => {
        reg.postBooking().then(postBookingResponse => {
            reg.updadeBookingToken(postBookingResponse).then(putBookingResponse => {
                assertions.showdHaveStatus(putBookingResponse, 403)
            })
        })
    });

    //

    it('Alterar uma reverserva com sucesso (200)', () => {
        reg.postBooking().then(postBookingResponse => {
            reg.updadeBooking(postBookingResponse).then(putBookingResponse => {
                assertions.showdHaveStatus(putBookingResponse, 200)
            })
        })
    });

    it('tentar alterar uma reverserva inexistente (405)', () => {
        reg.postBooking().then(postBookingResponse => {

            reg.updadeBookingInexistente(postBookingResponse).then(putBookingResponse => {
                assertions.showdHaveStatus(putBookingResponse, 405)
            })

        })
    });

    it('tentar alterar uma reserva com token inválido (403)', () => {
        reg.postBooking().then(postBookingResponse => {
            reg.updadeTokenInvalido(postBookingResponse).then(putBookingResponse => {
                assertions.showdHaveStatus(putBookingResponse, 403)
            })
        })
    });


    it('Excluir uma reserva com sucesso (201)', () => {
        reg.postBooking().then(postBookingResponse => {
            reg.deleteBooking(postBookingResponse).then(deleteBookingResponse => {
                assertions.showdHaveStatus(deleteBookingResponse, 201)
            })
        })
    })


    it('tentar excluir uma reserva sem token (403)', () => {
        reg.postBooking().then(postBookingResponse => {
            reg.deleteReservaSemToken(postBookingResponse).then(putBookingResponse => {
                assertions.showdHaveStatus(putBookingResponse, 403)
            })
        })
    });

    it('tentar excluir uma reserva sem token invalido (403)', () => {
        reg.postBooking().then(postBookingResponse => {
            reg.deleteReservaTokenInvalido(postBookingResponse).then(putBookingResponse => {
                assertions.showdHaveStatus(putBookingResponse, 403)
            })
        })
    });

    it('Excluir uma reserva inexistente()405', () => {
        reg.postBooking().then(postBookingResponse => {
            reg.deleteBookingInexistente(postBookingResponse).then(putBookingResponse => {
                assertions.showdHaveStatus(putBookingResponse, 405)
            })
        })
    });

});