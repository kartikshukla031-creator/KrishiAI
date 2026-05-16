export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false
    });
  }

  try {

    const { image } = req.body;

    const response = await fetch(
      `https://my-api.plantnet.org/v2/identify/all?api-key=${process.env.PLANTNET_API_KEY}`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          images: [image],
          modifiers: ["crops_fast"],
          organs: ["leaf"]
        })
      }
    );

    const data = await response.json();

    console.log(data);

    if (
      data.results &&
      data.results.length > 0
    ) {

      const top =
        data.results[0];

      return res.status(200).json({
        success: true,

        plant:
          top.species
          .scientificNameWithoutAuthor,

        confidence:
          (
            top.score * 100
          ).toFixed(2) + "%"
      });

    }

    return res.status(200).json({
      success: false
    });

  } catch (err) {

    console.log(err);

    return res.status(500).json({
      success: false,
      error: err.message
    });

  }

}