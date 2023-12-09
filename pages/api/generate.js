import { ImageResponse } from "next/server"

export default async (req) => {
    const { first_letter, second_letter, text_color, background_color } = await req.json()

    return new ImageResponse(
        <div
            style={{
                backgroundColor: background_color,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                margin: '0px',
                padding: '0px',
            }}
        >
            <h1
                style={{
                    margin: '0px',
                    padding: '0px',
                    fontSize: '144px',
                    color: text_color
                }}
            >
                {first_letter + second_letter}
            </h1>
        </div>,
        {
            width: 420,
            height: 420,
        },
    )
}

export const runtime = 'edge'
