import { cn } from "lib/utils";
import { FC, useRef } from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
    className?: string;
}

const MouseAnimation: FC<Props> = ({ className }) => {
    const ref = useRef<HTMLDivElement>(null);
    return <div ref={ref} onClick={() => {
        if (ref.current) {
            window.scrollTo({ top: ref.current.parentElement?.parentElement?.scrollHeight, behavior: 'smooth' });
        }
    }}>
        <div id="mouse" className={cn("relative border border-foreground/40 rounded-lg w-6 h-12", className)} />
    </div>;
}

export default MouseAnimation;