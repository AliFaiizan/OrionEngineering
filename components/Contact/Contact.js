import { useState } from "react";
import { ButtonGroup, Button } from "@components/Button";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        // You can add your own logic here to handle the form submission
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="accordion-item--container border border-neutral-200 bg-white overflow-hidden p-5 flex  flex-col gap-4"
        >
            <input
                type="text"
                placeholder="Name"
                value={name}
                className="border border-neutral-200 rounded-md p-2"
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                className="border border-neutral-200 rounded-md p-2"
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
                value={message}
                placeholder="Message"
                className="border border-neutral-200 rounded-md p-2"
                onChange={(e) => setMessage(e.target.value)}
            />
            <ButtonGroup alignment="center">
                <Button className="btn btn--secondary lemonsqueezy-button">
                    Submit
                </Button>
            </ButtonGroup>
        </form>
    );
}
