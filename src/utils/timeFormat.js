
export function   formatLocalTimeFromEpoch(inputUnixTime) {
    const localTime = new Date(inputUnixTime * 1000);

    return (
      localTime.toLocaleDateString() + " " + localTime.toLocaleTimeString()
    );
  }

  export function formatLocalDateFromEpoch(inputUnixTime) {
    const localTime = new Date(inputUnixTime * 1000);

    return (
      localTime.toLocaleDateString()
    );
  }