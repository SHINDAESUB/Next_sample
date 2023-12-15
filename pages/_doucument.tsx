import App from "next/app";
import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from "styled-components";

// 기본 Document MyDocument 덮어 쓴다
export default // @ts-ignore
class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = async () => {
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props}/>),
                })

                // 기본 Document 의 초깃값을 유용한다
                const initialProps = await Document.getInitialProps(ctx);

                // initialProps 에 더해 , styled 추가해서 반영한다.
                return {
                    ...initialProps,
                    styles: [
                        // 원래 스타일
                        initialProps.styles,
                        sheet.getStyleElement()
                    ],
                }
            }
        } finally {
            sheet.seal()
        }
    }
}