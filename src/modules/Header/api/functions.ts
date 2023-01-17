export function showBackButton(URL: string) {
  const show: string = URL === '/' ? 'hidden' : 'visible';
  return show;
}
