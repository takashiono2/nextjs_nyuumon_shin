import Layout from "../../components/Layout";
import { getPostsAllIds } from "../../lib/post";
export async function getStaticPaths(){
  const paths = getPostsAllIds();
  return {
    props:{
      paths,
      fallback: true,
    },
  }
}

export async function getStaticProps({ params }){
  const allPostsData = getPostsData();
  return {
    props:{
      allPostsData,
    },
  }
}

export default function Post(){
  return(
    <Layout>動的ルーティング設定</Layout>
  );
}