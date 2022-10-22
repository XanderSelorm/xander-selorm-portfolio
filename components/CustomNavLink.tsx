import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
    label: string;
    to: string;
}
const CustomNavLink = (props: Props) => {
      const router = useRouter();

   return <Link className="" href={props.to}>
       <div className={`text-blue-dark transition hover:text-green cursor-pointer ${props.to === router.pathname && 'text-green'}`}>{props.label}</div>
    </Link>;
}

export default CustomNavLink;