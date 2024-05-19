import { useSelector } from "react-redux";

export function calculateTimeOnTasks(timeOnTasks, staffId, bookingStatusId) {
  let totalSeconds = 0;
  timeOnTasks?.forEach(entry => {
    if (entry.status === bookingStatusId && entry.staff === staffId) {
      const taskSeconds = entry.time_finished - entry.time_started;
      if (taskSeconds > 0) {
        totalSeconds += taskSeconds;
      }
    }
  });
  return totalSeconds;
}

export function formatTimeReadable(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours}h ${minutes}m ${remainingSeconds}s`;
}