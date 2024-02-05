const car = {
    type: "Honda",
    model: "500",
    color: "red",
    fullDetails: function () {
      return this.type + " " + this.model + " " + this.color;
    },
  };
  
  console.log(
    "Car Details: " +
      car.type +
      " " +
      car.model +
      " " +
      car.color
  );

  console.log(car.fullDetails());