import express from "express";
import {v2 as cloudinary} from "cloudinary"
import dotenv from "dotenv"
import cors from "cors"

const app = express();
dotenv.config();

app.use(cors({
    origin: 'http://localhost:4200' //replace with your domain or specific front-end origin
}));

cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.APIKEY,
    api_secret: process.env.APISECRET,
    secure: true
})

const publicId = 'samples/finn_website_test/landingPage/clients_logo/sxncjgp5ghfy89ecz1ro';

/*

cloudinary.api.update(
    publicId, {
        resource_type: 'image',
        type: 'upload',
        context: 'description=Your image description' // Add your description here
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })

 */



app.get("/api/landingVideo", async (req, res) => {
    try {
        const folderPath = "samples/finn_website_test/landingPage/video/*";

        const result = await cloudinary.search
        .expression('folder:' + folderPath).sort_by('public_id','desc').execute();
        const elements = result.resources;

        res.json(elements[0])

    } catch (err) {
        res.status(500).json({ error: 'Error in retrieving video' });
    }
})

app.get("/api/clientLogos", async (req,res) => {
    try {
        const folderPath = "samples/finn_website_test/landingPage/clients_logo/*"

        const result = await cloudinary.search
            .expression('folder:' + folderPath).sort_by('public_id','desc').execute();

        const elements = result.resources;
        res.json(elements);
    } catch (err) {
        res.status(500).json({ error: 'Error in retrieving images' });
    }
})

app.get("/api/contactsImage", async (req,res) => {
    try {
        const folderPath = "samples/finn_website_test/landingPage/contacts/*"

        const result = await cloudinary.search
            .expression('folder:' + folderPath).sort_by('public_id','desc').execute();
        const elements = result.resources;

        res.json(elements[0])

    } catch (err) {
        res.status(500).json({ error: 'Error in retrieving images' });
    }
})

app.get("/api/showReelLanding", async (req,res) => {
    try {
        const folderPath = "samples/finn_website_test/landingPage/showreel_works/*";

        const result = await cloudinary.search
            .expression('folder:' + folderPath).sort_by('public_id','desc').execute();

        const elements = result.resources;

        res.json(elements[0]);

    } catch (err) {
        res.status(500).json({ error: 'Error in retrieving image' });
    }
})

app.get("/api/videoThumb", async (req,res) => {
    try {
        const folderPath = "samples/finn_website_test/landingPage/video_thumb/*";

        const result = await cloudinary.search
            .expression('folder:' + folderPath).sort_by('public_id','desc').execute();

        const elements = result.resources;

        res.json(elements[0]);

    } catch (err) {
        res.status(500).json({ error: 'Error in retrieving image' });
    }
})

app.get("/api/aboutProfileImage", async (req,res) => {
    try {
        const folderPath = "samples/finn_website_test/aboutPage/profilePicture/*";

        const result = await cloudinary.search
            .expression('folder:' + folderPath).sort_by('public_id','desc').execute();

        const elements = result.resources;

        res.json(elements[0]);

    } catch (err) {
        res.status(500).json({ error: 'Error in retrieving image' });
    }
})


app.get("/api/works/videography", async (req,res) => {
    try {
        const folderPath = "samples/finn_website_test/landingPage/clients_logo/*"

        const result = await cloudinary.search
            .expression('folder:' + folderPath).sort_by('public_id','desc').execute();

        const elements = result.resources;
        res.json(elements);
    } catch (err) {
        res.status(500).json({ error: 'Error in retrieving images' });
    }
})

app.get("/api/works/photography", async (req,res) => {
    try {
        const folderPath = "samples/finn_website_test/landingPage/clients_logo/*"

        const result = await cloudinary.search
            .expression('folder:' + folderPath).sort_by('public_id','desc').execute();

        const elements = result.resources;
        res.json(elements);
    } catch (err) {
        res.status(500).json({ error: 'Error in retrieving images' });
    }
})


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT)
})