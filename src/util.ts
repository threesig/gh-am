export const getRems = (pixelWidth:number) => pixelWidth/10;

// TODO: Add strong typing.  Enforce StyledComponent as parameter type
export const getSCStyles = (styledComponent:any) => {
  const styledComponentClass = styledComponent().type.styledComponentId;
  const styledComponentRoots = document.getElementsByClassName(styledComponentClass);
  const styles = window.getComputedStyle(styledComponentRoots[0]);

  return styles;
}