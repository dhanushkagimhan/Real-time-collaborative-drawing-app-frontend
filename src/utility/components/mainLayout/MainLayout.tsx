import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout(props: MainLayoutProps) {
  return (
    <div>
      <div></div>
      <div className="container mx-auto mt-10">{props.children}</div>
    </div>
  );
}
