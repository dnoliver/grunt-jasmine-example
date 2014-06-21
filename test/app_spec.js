describe("App suite", function() {
  it("App should exist", function() {
    expect(App).toBeDefined();
  });

  it("App should create successfully", function(){
    var app = new App();
    expect( app instanceof App ).toBe(true);
  });

  it("App should set and get name", function(){
    var app = new App();
    expect( app.getName() ).toEqual("App");
    app.setName("Simple app");
    expect( app.getName() ).toEqual("Simple app");
  });
});


