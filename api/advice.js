export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const { prompt, image } = req.body;

    const content = [
      {
        type: "text",
        text: prompt
      }
    ];

    if (image?.data) {
      content.push({
        type: "image_url",
        image_url: {
          url: `data:${image.mimeType};base64,${image.data}`
        }
      });
    }

    const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "qwen/qwen2.5-vl-3b-instruct:free",
        messages: [
          {
            role: "user",
            content
          }
        ]
      })
    });

    const data = await r.json();

    console.log("OPENROUTER RAW =", JSON.stringify(data));

    const answer =
      data?.choices?.[0]?.message?.content ||
      data?.error?.message ||
      "Analysis unavailable";

    return res.status(200).json({
      success: true,
      answer
    });

  } catch (e) {
    return res.status(500).json({
      success: false,
      error: e.message
    });
  }
}