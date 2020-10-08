const getDaysName = (day) => {
  const dayName = new Array(7);

  dayName[0] = "MIN";
  dayName[1] = "SEN";
  dayName[2] = "SEL";
  dayName[3] = "RAB";
  dayName[4] = "KAM";
  dayName[5] = "JUM";
  dayName[6] = "SAB";

  return dayName[day];
};

export default getDaysName;
