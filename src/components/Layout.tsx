import Head from "next/head";
import { FC } from "react";
interface Props {
    title?: string;
    children: JSX.Element | null;
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