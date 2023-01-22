export function showBackButton(URL: string) {
  const show: string =
    URL === '/' || URL.includes('home') ? 'hidden' : 'visible';
  return show;
}
