import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { Children } from "react";
import { AppRegistry } from "react-native";
import config from "root/app.json";

const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

if (typeof window !== "undefined") {
  var style = document.createElement("style");
  style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
}
export default class MyDocument extends Document {
  static getInitialProps = async ({
    renderPage,
  }: DocumentContext): Promise<DocumentInitialProps> => {
    AppRegistry.registerComponent(config.name, () => Main);
    // @ts-expect-error: getApplication exists so maybe using wrong @types lib(?)
    const { getStyleElement } = AppRegistry.getApplication(config.name);
    const page = await renderPage();
    const styles = [
      <style
        key={"style"}
        dangerouslySetInnerHTML={{ __html: normalizeNextElements }}
      />,
      style ?? [],
      getStyleElement(),
    ];
    return { ...page, styles: Children.toArray(styles) };
  };

  render() {
    return (
      <Html style={{ height: "100%" }}>
        <Head />
        <body style={{ height: "100%", overflow: "scroll" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
