import { SectionContainer } from "@components/Section";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ColumnData = [
    {
        id: uuid(),
        title: "Pak Fan",
        icon: "/pakfan-logo.png",
        content:
            "NutriPlan has revolutionized my meal planning and nutrition journey. With its intuitive Notion template, I can effortlessly plan my meals, track my nutrition, and stay on top of my health goals. It's truly a game-changer!"
    },
    {
        id: uuid(),
        title: "Zong Network",
        icon: "/zong-logo.png",
        content:
            "I've tried various meal planning tools, but NutriPlan stands out from the rest. The customizable layouts and seamless recipe integration make it a breeze to create delicious and healthy meals. It's become an essential part of my wellness routine."
    },
    {
        id: uuid(),
        title: "Encore Solutions",
        icon: "/encore-logo.png",
        content:
            "NutriPlan has made meal planning and tracking nutrition so much easier and enjoyable. The comprehensive features and user-friendly interface have helped me stay on track with my health goals. I highly recommend it to anyone looking for a convenient and effective solution."
    },
    {
        id: uuid(),
        title: "MW Engineering",
        icon: "/mw-logo.png",
        content:
            "I can't imagine my nutrition journey without NutriPlan. It has simplified the way I plan my meals and track my progress. The ability to customize layouts and easily integrate recipes has made healthy eating a breeze. It's been a true lifesaver!"
    }
];

export const Columns = () => {
    return (
        <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {ColumnData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="benefits-list--item text-[#737373] text-left"
                >
                    <Image
                        src={item.icon}
                        width={100}
                        height={100}
                        alt="Customizable Layouts image used."
                    />
                    <h3 className="text-xl mb-2 font-medium text-black">
                        {item.title}
                    </h3>
                    {/* <p>{item.content}</p> */}
                </div>
            ))}
        </SectionContainer>
    );
};
