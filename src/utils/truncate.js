export function truncateString(str, num, isTruncated) {
  if (str?.length <= num || !str?.length) {
    return str;
  }
  const truncatedString = `${str.slice(0, num)}...`;

  return isTruncated ? truncatedString : str;
}
