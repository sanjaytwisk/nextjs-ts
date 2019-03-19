declare module "*.svg" {
  const content: {
    content: string,
    id: string,
    viewBox: string
  };
  export default content;
}