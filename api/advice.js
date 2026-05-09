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

    const parts = [
      { text: prompt }
    ];

    if (image?.data) {
      parts.push({
        inlineData: {
          mimeType: image.mimeType,
          data: image.data
        }
      });
    }

    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts
            }
          ]
        })
      }
    );

    const data = await r.json();

    console.log("GEMINI RAW =", JSON.stringify(data));

    const answer =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      data?.promptFeedback?.blockReason ||
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