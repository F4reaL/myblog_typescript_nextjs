import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import getBlogs from "../server/blogs";
import { BlogPost } from "../interfaces/blog";
import PostPreview from "../components/PostPreview";

export default function Home({blogs} : InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(blogs)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen overflow-auto flex flex-col items-center bg-zinc-800 text-[#fff]">
        <title>Home Page</title>
        <section>
          <div className="mt-3 text-center">
            <h1 className="text-[3rem]">Welcome to F4reaL's Blogs</h1>
            <p>A fullstack blog made by F4reaL with NextJs, TypeScript and Tailwind CSS</p>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center text-[1.15rem] mt-12">
          <div className="flex gap-3 mb-12"></div>
            {blogs.map((blog: BlogPost)=>{
              return(
                <div key={blog.id} className="max-w-[28em] w-full max-h-[20em] overflow-hidden mx-6 mb-6 bg-neutral-300 text-zinc-800 rounded-lg p-4 hover:text-neutral-300 hover:bg-neutral-500 transition-all duration-300 cursor-pointer">
                <PostPreview id={blog.id} title={blog.title} bodyText={blog.bodyText} createdAt={blog.createdAt} author={blog.author} tags={blog.tags} />
                </div>
              )
            })}
          
        </section>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ()=>{
  let blogs: BlogPost[] = await getBlogs()
  return {
    props:{
      blogs
    }
  }
}
