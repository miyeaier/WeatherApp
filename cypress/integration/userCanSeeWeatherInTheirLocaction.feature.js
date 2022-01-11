describe("Weather info for usecp\'s location", () => {
  beforeEach(() => {
    cy.intercept('https://api.openweathermap.org/data/2.5/**', {
      fixture: "weather_response.json"
    })
    cy.intercept("https://api.opencagedata.com/geocode/v1/json/**", {
      fixture: "location_response.json"
    })
    cy.visit("http://localhost:3000", {
      onBeforeload(window) {
        const stubLocation = {
          coords: {
            latitiude: 57.7308,
            longitute: 11.9834
          },
        };
        cy.stub(window.navigator.geolocation, "getCurrentPosition").callsFake(
          (callback) => {
            return callback(stubLocation);
          }
        );
      },
    });
  })
  it("is expected to be displayed on the intial render", () => {
    cy.get("[data-cy=title]").should("contain", "Weather")
  });
  it('is expected to display a table', () => {
    cy.get("[data-cy=table]").should("be.visible")
    cy.get("[data-cy=Country]").should("contain", "Sweden");
    cy.get("[data-cy=City]").should("contain", "Stockholm");
    cy.get("[data-cy=Temperature]").should("contain", "");
});

});