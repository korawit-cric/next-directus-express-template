import { CounterButton, Link } from "@repo/cric-ui/components";

export const metadata = {
  title: "Store | Criclabs",
};

export default function Store(): JSX.Element {

  return (
    <div className="container">
      <h1 className="title">
        Store <br />
        <span>Criclabs</span>
      </h1>
      <CounterButton />
      <p className="description">
        Built With{" "}
        <Link href="https://turbo.build/repo" newTab>
          Turborepo
        </Link>
        {" & "}
        <Link href="https://nextjs.org/" newTab>
          Next.js
        </Link>
      </p>
    </div>
  );
}
