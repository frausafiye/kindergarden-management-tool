export default function adjustFormData(e) {
  const formData = new FormData(e.target);
  let obj = {
    address: {},
    emergencyContact: [{}, {}],
    allergies: [],
  };
  for (let pair of formData) {
    if (
      pair[0] === "city" ||
      pair[0] === "street" ||
      pair[0] === "number" ||
      pair[0] === "postcode"
    ) {
      obj.address[pair[0]] = pair[1];
    } else if (
      pair[0] === "emerName1" ||
      pair[0] === "emerEmail1" ||
      pair[0] === "emerNumber1"
    ) {
      obj.emergencyContact[0][pair[0]] = pair[1];
    } else if (
      pair[0] === "emerName2" ||
      pair[0] === "emerEmail2" ||
      pair[0] === "emerNumber2"
    ) {
      obj.emergencyContact[1][pair[0]] = pair[1];
    } else if (
      pair[0] === "Eggs" ||
      pair[0] === "Milk" ||
      pair[0] === "Peanuts" ||
      pair[0] === "Soy" ||
      pair[0] === "Wheat" ||
      pair[0] === "Tree Nuts" ||
      pair[0] === "Seefood" ||
      pair[0] === "Fish" ||
      pair[0] === "Raw Fruit" ||
      pair[0] === "Raw Veggies"
    ) {
      obj.allergies.push(pair[0]);
    } else {
      obj[pair[0]] = pair[1];
    }
  }
  return obj;
}
