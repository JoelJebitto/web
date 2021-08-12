import Head from "next/head";
import Cards from "../components/Card";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="flex-1">
          <Cards githubUrl="http://github.com/"/>
        </div>
        <div className="flex-1"></div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
