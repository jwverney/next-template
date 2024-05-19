export function formatDateTime(dateTimeString) {
    const dateTime = new Date(dateTimeString);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'};
    return dateTime.toLocaleString('en-AU', options);
  }

  export const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    const seconds = totalSeconds - (hours * 3600) - (minutes * 60);
  
    return [hours, minutes, seconds]
      .map(val => val < 10 ? `0${val}` : val)
      .join(':');
  };

  export function convertFormattedTimeToSeconds(formattedTime) {
    const parts = formattedTime.split(':');
    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);
    const seconds = parseInt(parts[2], 10);
    return hours * 3600 + minutes * 60 + seconds;
  }

  export const formatSeconds = (seconds) => {
    const pad = (num) => num.toString().padStart(2, '0');
    const hours = pad(Math.floor(seconds / 3600));
    const minutes = pad(Math.floor((seconds % 3600) / 60));
    const secs = pad(seconds % 60);
    return `${hours}:${minutes}:${secs}`;
  };

  export function formatPosixTime(posixTime) {
    const date = new Date(posixTime * 1000);
    return date.toLocaleString('en-AU', {
      weekday: 'short', // abbreviated day of the week
      month: 'short',  // abbreviated month
      day: 'numeric',  // day of the month
      year: 'numeric', // year
      hour: 'numeric', // hour
      minute: 'numeric', // minute
      hour12: true     // use 12-hour format
    });
  }


  export function formatPosixShort(posixTime) {
    const date = new Date(posixTime * 1000);
    return date.toLocaleString('en-AU', {
      day: '2-digit',  // day of the month
      month: '2-digit',
      year: 'numeric', // year
    });
  }

  export function formatPosixShortTime(posixTime) {
    const date = new Date(posixTime * 1000);
    return date.toLocaleString('en-AU', {
      hour: 'numeric',
      minute: 'numeric',
    });
  }

  export function posixToDatePicker(posixTime) {
    return new Date(posixTime * 1000);
  }