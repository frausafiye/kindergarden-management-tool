const filterEmergencyContacts = (emergencyContact) => {
  //empty fields and fully empty objects should be erased
  let filteredContacts = [];
  emergencyContact?.map((contact) => {
    const filteredContactKeys = Object.keys(contact).filter(
      (key) => contact[key] !== "" && contact[key] !== " "
    );
    if (filteredContactKeys.length) {
      const newContactObj = {};
      filteredContactKeys.map((key) => (newContactObj[key] = contact[key]));
      filteredContacts.push(newContactObj);
    }
  });
  return filteredContacts;
};
export default filterEmergencyContacts;
