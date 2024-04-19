function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Tempat penampungan hasil
  const result = [];
  cars.map((car) => {
    if (car.available !== false) {
      result.push(car)
    }
  })
  // console.log(result);

  // Tulis code-mu disini

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
