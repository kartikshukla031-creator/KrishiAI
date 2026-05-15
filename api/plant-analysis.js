export default async function handler(req,res){

  if(req.method !== "POST"){

    return res.status(405).json({

      error:"Method not allowed"

    });

  }

  try{

    const { image } = req.body;

    if(!image){

      return res.status(400).json({

        error:"No image provided"

      });

    }

    const response = await fetch(

      `https://my-api.plantnet.org/v2/identify/all?api-key=${process.env.PLANTNET_API_KEY}`,

      {

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({

          images:[image],

          organs:["leaf"]

        })

      }

    );

    const data = await response.json();

    if(!data.results || data.results.length === 0){

      return res.status(200).json({

        success:true,

        result:"No plant identified"

      });

    }

    const plant =

    data.results[0]
    .species
    .scientificNameWithoutAuthor;

    return res.status(200).json({

      success:true,

      result:`🌿 Plant Detected: ${plant}`

    });

  }

  catch(error){

    return res.status(500).json({

      success:false,

      error:error.message

    });

  }

}