import Head from "next/head";
import { FC, ReactElement } from "react";
interface Props {
    title?: string;
    children: ReactElement<any,any>;
    className?: string
}
export const Layout: FC<Props> = ({ title, children, className }) => {
    return (
        <div className={className}>
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </div>
    )
}
Layout.defaultProps = {
    title: "SJD"
}