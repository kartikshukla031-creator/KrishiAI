export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { image } = req.body;

    const response = await fetch(
      "https://api.clarifai.com/v2/models/general-image-recognition/outputs",
      {
        method: "POST",
        headers: {
          Authorization: `Key ${process.env.CLARIFAI_PAT}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: [
            {
              data: {
                image: {
                  base64: image.replace(
                    /^data:image\/[a-z]+;base64,/,
                    ""
                  ),
                },
              },
            },
          ],
        }),
      }
    );

    const data = await response.json();

    const concepts =
      data.outputs[0].data.concepts
        .slice(0, 5)
        .map((c) => c.name)
        .join(", ");

    res.status(200).json({
      success: true,
      answer: "Detected: " + concepts,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
}