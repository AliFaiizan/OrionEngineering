import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { PageTitle } from "@components/Title";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";

export const Header = () => {
    return (
        <header
            id="header"
            className="header fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
        >
            <SectionContainer className="header--container wrap wrap-px ">
                <div className="header-logo--container">
                    <h1 className="logo mb-0">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="logo"
                                className="h-10 w-auto "
                                height="50"
                                width="100"
                                priority
                            />
                        </Link>
                    </h1>
                </div>
                <div class="flex justify-center items-center">
                    <p class="font-bold">Orion Engineering</p>
                </div>
                <SectionContainer className="flex items-center ml-auto">
                    <Nav />
                </SectionContainer>
            </SectionContainer>
        </header>
    );
};
