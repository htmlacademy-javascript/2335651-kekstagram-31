
const convertsHoursToMinutes = (time) => {
  const ARR_TIME = time.split(':');
  return (parseInt(ARR_TIME[0], 10) * 60) + parseInt(ARR_TIME[1], 10);
};

const checkMeetingdDuration = function (startWork, endWork, startMeeting, timeMeeting) {
  const START_WORK_MINUTES = convertsHoursToMinutes(startWork);
  const END_WORK_MINUTES = convertsHoursToMinutes(endWork);
  const END_MEETING_MINUTS = convertsHoursToMinutes(startMeeting) + timeMeeting;

  return END_MEETING_MINUTS <= END_WORK_MINUTES && convertsHoursToMinutes(startMeeting) >= START_WORK_MINUTES;
};

checkMeetingdDuration();
