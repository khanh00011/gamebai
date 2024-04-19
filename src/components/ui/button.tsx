import React from "react";
import { cn } from "../../utils/utils";

type Props = React.HTMLAttributes<HTMLButtonElement>

function Button({ className, ...props }: Props) {
    return (
        <button className={cn(className)} {...props} />
    )

}

export {
    Button
};