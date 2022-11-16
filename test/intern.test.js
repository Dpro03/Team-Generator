const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and school if provided valid arguments", () => {
      const intern = new Intern("John", 1, "test@test.com", "UVM");
      expect(intern.name).toEqual("John");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("test@test.com");
      expect(intern.school).toEqual("UVM");
    });
  });
  describe("getSchool", () => {
    it("should return the intern's school", () => {
      const intern = new Intern("John", 1, "test@test.com", "UVM");
      expect(intern.getSchool()).toEqual("UVM");
    });
  });
  describe("getRole", () => {
    it("should return 'Intern'", () => {
      const intern = new Intern("John", 1, "test@test.com", "UVM");
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});

// Path: lib/Intern.js
