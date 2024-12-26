'use client'
import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

const TestimonialCardsData = [
    {
        "quote": "The computer science engineering program provided me with the technical and problem-solving skills needed to excel in my career.",
        "name": "Alice Johnson",
        "title": "Software Engineer at TechCorp"
    },
    {
        "quote": "This program helped me build a strong foundation in algorithms and programming, opening doors to exciting opportunities in AI development.",
        "name": "Michael Brown",
        "title": "AI Specialist at InnovateAI"
    },
    {
        "quote": "The hands-on projects and supportive faculty made my learning experience truly enriching and prepared me for real-world challenges.",
        "name": "Sophia Lee",
        "title": "Full-Stack Developer at WebWorks"
    },
    {
        "quote": "I gained not only technical expertise but also critical thinking and collaboration skills that are essential in the tech industry.",
        "name": "David Smith",
        "title": "Data Analyst at DataDive"
    },
    {
        "quote": "The curriculum is well-structured, covering everything from the basics to advanced topics like cybersecurity and blockchain technology.",
        "name": "Olivia Harris",
        "title": "Cybersecurity Consultant at SecureNet"
    },
    {
        "quote": "The program's focus on practical knowledge and industry trends gave me a competitive edge in the job market.",
        "name": "Ethan Taylor",
        "title": "DevOps Engineer at CloudFlow"
    },
    {
        "quote": "Studying computer science engineering has been a transformative experience that has set me on the path to becoming a tech entrepreneur.",
        "name": "Isabella Martinez",
        "title": "Founder & CEO of CodeSpark"
    },
    {
        "quote": "The diverse range of topics, from machine learning to software design, prepared me for a versatile career in technology.",
        "name": "James Wilson",
        "title": "Machine Learning Engineer at NeuralTech"
    },
    {
        "quote": "Thanks to the rigorous coursework and excellent guidance, I feel confident tackling complex technical problems in my role.",
        "name": "Emily White",
        "title": "Backend Developer at Appify"
    },
    {
        "quote": "This program encouraged me to think creatively and critically, which has been invaluable in my work as a systems architect.",
        "name": "Liam Brown",
        "title": "Systems Architect at NetSolutions"
    }
]
export default function TestimonialCards(){
    return (
        <div
            className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={TestimonialCardsData}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    );
}