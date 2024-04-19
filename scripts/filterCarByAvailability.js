function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Tempat penampungan hasil
  const result = [];
  // console.log(result);

  // Tulis code-mu disini
  function filterCarByAvailability(car, availability) {
    for (let i = 0; i < car.length; i++) {
        if (car[i].available === availability) {
            result.push(car[i]);
        }
    }
    return;
  }

  filterCarByAvailability(cars, true)

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
