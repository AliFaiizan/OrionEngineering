import React from "react";
import { SectionContainer } from "@components/Section";

function Contact() {
    return (
        <SectionContainer className="accordion--container my-16 drop-shadow-xl max-w-3xl mx-auto offset-y-0 offset-x-8">
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <br />
                <label>
                    Message:
                    <textarea name="message" />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </SectionContainer>
    );
}

export default Contact;
