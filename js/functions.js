
const convertsHoursToMinutes = (time) => {
  const arrTime = time.split(':');
  return (parseInt(arrTime[0], 10) * 60) + parseInt(arrTime[1], 10);
};

const checkMeetingdDuration = (startWork, endWork, startMeeting, timeMeeting) => {
  const startWorkMinutes = convertsHoursToMinutes(startWork);
  const endWorkMinutes = convertsHoursToMinutes(endWork);
  const endMeetingMinuts = convertsHoursToMinutes(startMeeting) + timeMeeting;

  return endMeetingMinuts <= endWorkMinutes && convertsHoursToMinutes(startMeeting) >= startWorkMinutes;
};

checkMeetingdDuration();
