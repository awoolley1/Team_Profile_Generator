function Manager(name, id, email, office) {
  if (typeof name !== "string" || !name.trim().length) {
    throw new Error("Expected parameter 'name' to be a non-empty string");
  }

  if (typeof id !== "number" || isNaN(id) || id < 0) {
    throw new Error("Expected parameter 'id' to be a non-negative number");
  }

  if (typeof email !== "string" || !email.trim().length) {
    throw new Error("Expected parameter 'email' to be a non-empty string");
  }

  if (typeof office !== "number" || isNaN(office) || office < 0) {
    throw new Error("Expected parameter 'office' to be a non-negative number");
  }

  this.name = name;
  this.id = id;
}

module.exports = ManagerTest;
