 describe("Weather info for usecp\'s location",()=>{

    it('is expeected to be displayed on initial render',()=>{
      cy.visit('/',({
        onBeforeLoad(window) {
          const stubLocation ={
            coords:{
              latitude: 55.7842,
              longtude: 12.4518
            }
          };
          cy.stub(window.navigator.geolocation,"getCurrentPosition").callsFake(
            callback => {
              return callback(stubLocation)
            }
          )
        }
      }))
    })
  })
