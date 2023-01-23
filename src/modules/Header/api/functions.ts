export function showBackButton(URL: string) {
  const show: string =
    URL === '/' || URL.includes('/hot') || URL.includes('/games')
      ? 'hidden'
      : 'visible';
  return show;
}
