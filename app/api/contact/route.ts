import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, company, message, industry } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }

        const contact = await prisma.contactRequest.create({
            data: {
                name,
                email,
                phone,
                company,
                message,
                industry,
            },
        });

        return NextResponse.json({ message: "Contact request submitted successfully", id: contact.id }, { status: 201 });
    } catch (error) {
        console.error("Contact submission error:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
