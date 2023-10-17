import { SectionContainer } from "@components/Section";
import Link from "next/link";
import Image from "next/image";

const DATA = [
    {
        title: "Company",
        items: [
            {
                label: "Products",
                href: "#features"
            },
            {
                label: "Customers",
                href: "#testimonials"
            },
            {
                label: "FAQ",
                href: "#faq"
            },
            {
                label: "Contact",
                href: "#contact"
            }
        ]
    },
    {
        title: "Social Profiles",
        items: [
            {
                label: "X",
                href: "https://X.com/",
                target: "_blank"
            },
            {
                label: "Instagram",
                href: "https://instagram.com",
                target: "_blank"
            },
            {
                label: "Facebook",
                href: "https://facebook.com",
                target: "_blank"
            }
        ]
    }
];

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer id="footer" className="bg-white">
            {/* Footer Links */}
            <SectionContainer className="footer--container wrap wrap-px relative z-10">
                <div className="footer--content-container py-16">
                    <div className="footer-links mb-12 grid grid-cols-2 gap-8 md:mb-16 md:grid-cols-8 lg:grid-cols-12">
                        <div className="col-span-6">
                            <div className="footer--logo flex flex-row">
                                <Link href="/">
                                    <Image
                                        src="/logo.png"
                                        alt="logo"
                                        className="h-10 w-auto"
                                        height="25"
                                        width="100"
                                        priority
                                    />
                                </Link>
                                <div className="flex items-center">
                                    <p class="font-bold">Orion Engineering</p>
                                </div>

                                {/* Get Template button; remove if not used */}
                                {/* <ButtonGroup alignment="left">
                                    <a
                                        role="button"
                                        href="https://avenuelabs.lemonsqueezy.com/checkout/buy/df8ccd46-fa63-4384-b2aa-c4c9b8ad3ef0?embed=1"
                                        className="btn btn--secondary lemonsqueezy-button"
                                    >
                                        Get Template
                                        <Icon icon="material-symbols:arrow-forward-rounded" />
                                    </a>
                                </ButtonGroup> */}
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className="footer-menu grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12">
                                {DATA.map((footerLinks) => (
                                    <div
                                        key={footerLinks.title}
                                        className="footer-menu--container col-span-1 md:col-span-4"
                                    >
                                        <h3 className="font-bold text-base mb-2">
                                            {footerLinks.title}
                                        </h3>
                                        <ul className="footer-menu--list">
                                            {footerLinks.items.map(
                                                (footerItem) => (
                                                    <li
                                                        key={footerItem.label}
                                                        className="footer-menu--list-item gap-2"
                                                    >
                                                        <a
                                                            className="mb-2 block w-auto font-medium transition-colors duration-300 hover:underline"
                                                            href={
                                                                footerItem.href
                                                            }
                                                            target={
                                                                footerItem.target
                                                            }
                                                        >
                                                            {footerItem.label}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
            {/* Footer Credits */}
            <SectionContainer className="footer-credits relative z-10">
                <div className="wrap wrap-px py-6">
                    <p className="my-0">
                        © {year} Orion Engineering. All rights reserved{" - "}
                        <span className="font-normal">
                            Ultimate Engineering{" "}
                            <Link
                                className="transition-colors duration-300 hover:underline"
                                href="https://google.com"
                                target="_blank"
                            >
                                Solutions.
                            </Link>
                        </span>
                    </p>
                </div>
            </SectionContainer>
            <div className="footer--background"></div>
        </footer>
    );
};
