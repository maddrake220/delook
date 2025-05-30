import { PostData } from '../types/postTypes';
import { MDXHeader } from './MDXHeader';
import { MDXRender } from './MDXRender';

export function RenderPost({ post }: { post: PostData }) {
  const { category, filename, metaData, Content } = post;

  return (
    <>
      <MDXHeader metaData={metaData} pathData={{ category, filename }} />
      <MDXRender>
        <Content />
      </MDXRender>
    </>
  );
}
