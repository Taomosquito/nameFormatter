const nameInverter = function (name) {
  if (typeof name === undefined){
    throw new Error ('name is undefined and therefor invalid');
  }
  if (name === "") {
    return "";
  }
  let trimmedName = name.trim();
  const words = trimmedName.split(' ');
  if (name.includes(".")){
    if (!words[2]){    
      if (trimmedName.includes(" ")){
      const lastName = words[1];
      const firstName = words[0];
      const invertedName = `${firstName} ${lastName}`;
      console.log(invertedName);
      return invertedName;
      }
      else {
        return "";
      }
    }
    else {
      const lastName = words[2];
      const firstName = words[1];
      const honorific = words[0];
      const invertedName = `${honorific} ${lastName}, ${firstName}`;
      console.log(invertedName);
      return invertedName
    }
  }
  if (trimmedName.includes(" ")){
  const lastName = words[1];
  const firstName = words[0];
  const invertedName = `${lastName}, ${firstName}`;
  console.log(invertedName);
  return invertedName;  
  }
  console.log(name);
  return trimmedName;
};

module.exports = nameInverter;
