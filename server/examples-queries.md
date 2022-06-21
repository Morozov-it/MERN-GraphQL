mutation {
  addProject(name: "proj", description: "desmonies", clientId:"2") {
    id
    name
    description
    status
    client {
      id
      name
    }
  }
}

mutation {
  deleteProject (id: "3") {
    id
    name
  }
}

mutation {
  updateProject (id: "1", description: "new value", status: completed) {
    id
    name
    description
    status
    client {
      id
      name
      email
      phone
    }
  }
}

query {
  projects {
    id
    name
    description
    status
    client {
      id
      name
    }
  }
  clients {
    id
    name
  }
}

query {
  project (id: "1") {
    id
    name
    description
    status
    client {
      name
      email
    }
  }
}