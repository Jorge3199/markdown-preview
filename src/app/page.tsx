import Head from 'next/head';
import MarkdownPreviewer from './../components/MarkdownPreviewer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Markdown Previewer</title>
      </Head>
      <MarkdownPreviewer />
    </div>
  );
}
