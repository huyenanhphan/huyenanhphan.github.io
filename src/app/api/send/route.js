import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [""], // 
      subject: 'Hello from Anne!',
      react: <>
        <p>Hi there!</p>
      </>,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

// import { Resend } from 'resend';
// import { NextResponse } from 'next/server';

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST() {
//     try {
//         const data = await resend.emails.send({
//             from: fromEmail ?? '',
//             to: [""],
//             subject: 'Hello from Anne!',
//             html: '<p>Hi there!</p>', // Use html instead of react for email content
//         });

//         return NextResponse.json(data); // Use NextResponse instead of Response
//     } catch (error) {
//         return NextResponse.json({ error });
//     }
// }
