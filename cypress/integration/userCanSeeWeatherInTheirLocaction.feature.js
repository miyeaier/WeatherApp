
 describe("Weather info for usecp\'s location",()=>{

  it("is expected to be displayed on the intial render", () => {
    cy.visit("http://localhost:3000", {
      onBeforeload(window) {
        const stubLocation = {
          coords: { latitiude: 57.7308, longitute: 11.9834 },

   
        };
        cy.stub(window.navigator.geolocation, "getCurrentPosition").callsFake(
          (callback) => {
            return callback(stubLocation);
          }
        );
      },
    });
  });
});
  
