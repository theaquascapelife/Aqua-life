import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      message,
      products,
    } = body;

    const productsHtml = products
      ?.map(
        (item: any, index: number) => `
          <tr>
            <td style="padding:8px;border:1px solid #ddd;">
              ${index + 1}
            </td>
            <td style="padding:8px;border:1px solid #ddd;">
              ${item.title}
            </td>
            <td style="padding:8px;border:1px solid #ddd;">
              ₹${item.price}
            </td>
          </tr>
        `
      )
      .join("");

    await resend.emails.send({
      from: "Aquarium Inquiry <onboarding@resend.dev>",
      to: process.env.INQUIRY_RECEIVER_EMAIL!,
      subject: "New Aquarium Inquiry",
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px;">
          <h2>New Aquarium Inquiry</h2>

          <h3>Customer Details</h3>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Phone:</strong> ${phone}
          </p>

          <p>
            <strong>Message:</strong><br/>
            ${message || "N/A"}
          </p>

          <h3>Selected Products</h3>

          <table
            style="
              border-collapse:collapse;
              width:100%;
              margin-top:10px;
            "
          >
            <thead>
              <tr>
                <th style="padding:8px;border:1px solid #ddd;">
                  #
                </th>

                <th style="padding:8px;border:1px solid #ddd;">
                  Product
                </th>

                <th style="padding:8px;border:1px solid #ddd;">
                  Price
                </th>
              </tr>
            </thead>

            <tbody>
              ${productsHtml}
            </tbody>
          </table>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}