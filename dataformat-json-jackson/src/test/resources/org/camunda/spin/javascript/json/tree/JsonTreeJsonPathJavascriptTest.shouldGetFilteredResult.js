var jsonNode = JSON(input);

emptyList = jsonNode.jsonPath("customers[?(@.name == 'Klo')]").elementList();
nodeList = jsonNode.jsonPath("customers[?(@.name == 'Waldo')]").elementList();