import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  label: string;
  to: string;
  target?: string;
}
const CustomNavLink = (props: Props) => {
      const router = useRouter();

   return (
     <Link className="" href={props.to} target={props.target}>
       <div
         className={`text-blue-dark hover:text-green cursor-pointer transition ${
           props.to === router.pathname && 'text-green'
         }`}
       >
         {props.label}
       </div>
     </Link>
   );
}

export default CustomNavLink;