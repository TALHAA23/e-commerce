const goBackDays = 5;

export function isNewRelease(publishDate) {
  const today = new Date().getTime();
  const fiveDaysAgo = today - goBackDays * 24 * 60 * 60 * 1000;
  const publishDateInMilliseconds = publishDate.seconds * 1000; // Convert Firestore timestamp to milliseconds
  return (
    publishDateInMilliseconds >= fiveDaysAgo &&
    publishDateInMilliseconds <= today
  ); // Check if publishDate is within the last 5 days
}
