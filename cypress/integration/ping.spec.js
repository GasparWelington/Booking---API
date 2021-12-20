/// <reference types="cypress"/>

import reg from '../support/api/requests'
import assertions from '../support/api/assertions'

context('Ping', () => {
    it('Validar que a aplicacao esta no ar', () => {
        reg.getPing().then(getPingResponse => {
            assertions.showdHaveStatus(getPingResponse, 201)
        })



    });

    context('ping', () => {
        it.only('Get teste de API', () => {
            reg.getPing().its('status').should('eq' , 201) 
      
            })
            
        });
    
});