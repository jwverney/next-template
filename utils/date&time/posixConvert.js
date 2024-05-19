/**
 * Converts a date and time string to a POSIX (Unix) timestamp.
 * @param {string} dateStr - The date and time string.
 * @return {number} - The POSIX timestamp.
 */
export function convertToPosix(dateStr) {
    const date = new Date(dateStr);
    return Math.floor(date.getTime() / 1000);
}

export function convertTimeToSeconds(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return (hours * 3600) + (minutes * 60);
  };

export function convertSecondsToHHMM(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }