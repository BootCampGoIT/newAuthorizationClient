export const getName = (
  firstName,
  lastName,
  email,
  isMobileDevice,
  isTabletDevice
) => {
  if ((isMobileDevice || isTabletDevice) && firstName && lastName)
    return trunkData(`${firstName} ${lastName}`);
  if ((!isMobileDevice || !isTabletDevice) && firstName && lastName)
    return trunkData(`${firstName} ${lastName}`, 60);
  if ((isMobileDevice || isTabletDevice) && firstName)
    return trunkData(firstName);
  if ((!isMobileDevice || !isTabletDevice) && firstName)
    return trunkData(firstName, 37);
  if ((isMobileDevice || isTabletDevice) && lastName)
    return trunkData(lastName);
  if ((!isMobileDevice || !isTabletDevice) && lastName)
    return trunkData(lastName, 37);
  if (isMobileDevice || isTabletDevice) return trunkData(email);
  if (!isMobileDevice || !isTabletDevice) return trunkData(email, 37);
};

export const getPersonName = (
  firstName,
  lastName,
  email,
  isMobileDevice,
  isTabletDevice
) => {
  if ((isMobileDevice || isTabletDevice) && firstName && lastName)
    return trunkData(`${firstName} ${lastName}`);
  if ((!isMobileDevice || !isTabletDevice) && firstName && lastName)
    return trunkData(`${firstName} ${lastName}`, 27);
  if ((isMobileDevice || isTabletDevice) && firstName)
    return trunkData(firstName);
  if ((!isMobileDevice || !isTabletDevice) && firstName)
    return trunkData(firstName, 27);
  if ((isMobileDevice || isTabletDevice) && lastName)
    return trunkData(lastName);
  if ((!isMobileDevice || !isTabletDevice) && lastName)
    return trunkData(lastName, 27);
  if (isMobileDevice || isTabletDevice) return trunkData(email, 15);
  if (!isMobileDevice || !isTabletDevice) return trunkData(email, 27);
};

export const getNameOrNoData = (
  firstName,
  lastName,
  isMobileDevice,
  isTabletDevice,
  noData
) => {
  if ((isMobileDevice || isTabletDevice) && firstName && lastName)
    return trunkData(`${firstName} ${lastName}`);
  if ((!isMobileDevice || !isTabletDevice) && firstName && lastName)
    return trunkData(`${firstName} ${lastName}`, 37);
  if ((isMobileDevice || isTabletDevice) && firstName)
    return trunkData(lastName);
  if ((!isMobileDevice || !isTabletDevice) && lastName)
    return trunkData(lastName, 37);
  return noData;
};

export const trunkData = (str, length = 27) => {
  if (str.length > length) {
    return str.slice(0, length) + "...";
  } else return str;
};
